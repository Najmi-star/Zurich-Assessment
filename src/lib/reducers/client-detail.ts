import { createSlice } from "@reduxjs/toolkit";
import { User, UserData } from "@/types";
import { getClientAPI } from "@/apis/client";

const initialState: User = {
    userList: undefined,
    page: 0,
    perPage: 0,
    totalData: 0,
    totalPage: 0,
    loading: false
}

export const userInfoSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        .addCase(getClientAPI.pending, (state) => {
            state.loading = true
        })
        .addCase(getClientAPI.fulfilled, (state, action) => {
            const payload = action.payload
            state.loading = false

            const filteredName: UserData[] = payload.data.filter((data: any) => 
                data.first_name.startsWith('G') || data.last_name.startsWith('W'));

            state.userList = filteredName
            state.page = payload.page
            state.perPage = payload.per_page
            state.totalData = payload.total
            state.totalPage = payload.total_pages
        })
        .addCase(getClientAPI.rejected, (state) => {
            state.loading = true
        })
    }
})

export const {} = userInfoSlice.actions;
export default userInfoSlice.reducer;