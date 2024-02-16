import { createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  increment,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../../firebase/config";

const uploadPicture = async (picture) => {
  const response = await fetch(picture);
  const file = await response.blob();

  const storageRef = ref(storage, `images/${nanoid()}.jpg`);
  const snapshot = await uploadBytes(storageRef, file);
  const url = await getDownloadURL(snapshot.ref);

  return url;
};

export const createPosts = createAsyncThunk(
  "posts/create",

  async (credentials, thunkApi) => {
    const { userId, coords, login, location, picture, title } = credentials;

    try {
      const pictureUrl = await uploadPicture(picture);

      const newPost = {
        picture: pictureUrl,
        title,
        location,
        coords,
        author: login,
        authorId: userId,
        commentsCount: 0,
        likesCount: 0,
        date: new Date().toISOString(),
      };
    
  
      try {
        const postRef = await addDoc(collection(db, "posts"), newPost);

        return { ...newPost, id: postRef.id };

      } catch (error) {
        console.log("Error adding document:", error);
        
      }
    } catch (error) {
      const rejectMessage = error.message;
      return thunkApi.rejectWithValue(rejectMessage);
    }
  }
);

export const getPosts = createAsyncThunk("posts/get", async (_, thunkApi) => {
  try {
    const coll = collection(db, "posts");
    const querySnapshot = await getDocs(coll);
    const posts = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    return posts;
  } catch (error) {
    const rejectMessage = error.message;
    return thunkApi.rejectWithValue(rejectMessage);
  }
});

export const getUserPosts = createAsyncThunk(
  "posts/getUserPosts",
  async (userId, thunkApi) => {
    try {
      const q = query(collection(db, "posts"), where("authorId", "==", userId));
      const querySnapshot = await getDocs(q);

      const posts = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      return posts;
    } catch (error) {
      const rejectMessage = error.message;
      return thunkApi.rejectWithValue(rejectMessage);
    }
  }
);

export const createComment = createAsyncThunk(
  "posts/createComment",
  async (credentials, thunkApi) => {
    const { userId, avatar, comment, login, postId } = credentials;

    try {
      const newComment = {
        comment,
        avatar,
        author: login,
        authorId: userId,
        createdAt: new Date().toISOString(),
      };
      const postDocRef = doc(db, "posts", postId);

      const commentRef = await addDoc(
        collection(postDocRef, "comments"),
        newComment
      );

      await updateDoc(postDocRef, { commentsCount: increment(1) });

      return { ...newComment, id: commentRef.id };
    } catch (error) {
      const rejectMessage = error.message;
      return thunkApi.rejectWithValue(rejectMessage);
    }
  }
);

export const getComments = createAsyncThunk(
  "posts/getComments",
  async (postId, thunkApi) => {
    try {
      const querySnapshot = await getDocs(
        collection(db, "posts", postId, "comments")
      );
      const comments = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      return comments;
    } catch (error) {
      const rejectMessage = error.message;
      return thunkApi.rejectWithValue(rejectMessage);
    }
  }
);
