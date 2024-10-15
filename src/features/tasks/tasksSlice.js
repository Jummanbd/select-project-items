import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search:"",
};

const tasksSlice = createSlice({
    name: "projects",
    initialState,
    reducers: {
        userSearch: (state, action) => {
            state.search = action.payload;
        },
  
    },
});

export const {userSearch} = tasksSlice.actions;
export default tasksSlice.reducer;