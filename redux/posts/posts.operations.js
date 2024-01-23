import { createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const uploadPicture = async (picture) => {
  const response = await fetch(picture);
  const file = await response.blob();

  const sotrageRef = ref(storage, `images/${nanoid()}.jpg`);
  const snapshot = await uploadBytes(sotrageRef, file);
  const url = await getDownloadURL(snapshot.ref);
  return url;
};

export const createPosts = createAsyncThunk(
  "posts/create",

  async (credentials, thunkApi) => {
    const { userId, coords, login, location, picture, title } = credentials;

    try {
      const pictureUrl = uploadPicture(picture);
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
        console.log("Error:", error);
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
