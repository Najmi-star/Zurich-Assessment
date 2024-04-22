import { createAsyncThunk } from "@reduxjs/toolkit";

export const getClientAPI = createAsyncThunk(
    '',
    async({
        page,
    }:{
        page: string,
    }) => {
        try {
            const res = await fetch(`https://reqres.in/api/users?page=${page}`)

            if(res.status == 200){
                return res.json()
            }
            else{
                throw new Error(`Request failed with status ${res.status}`);
            }
            
        } catch (error){
            throw new Error(`Request failed with error ${error} `);
        }
    }
)