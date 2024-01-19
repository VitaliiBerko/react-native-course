import { createAsyncThunk } from "@reduxjs/toolkit";

const uploadPicture= async(picture)=>{

}

export const createPosts =createAsyncThunk(
    'posts/create',

    async (credentials, thunkApi)=>{
        const {userId, coords, login, location, picture, title}=credentials;

        try {
            const pictureUrl = uploadPicture(picture)
        } catch (error) {
            
        }
    }
)