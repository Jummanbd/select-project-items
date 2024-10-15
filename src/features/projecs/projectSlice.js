import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   projectname:[]
};

const projectsSlice = createSlice({
    name: "projects",
    initialState,
    reducers: {
        userSelect: (state, action) => {
            state.projectname.push(action.payload)
        },
        unSelect:(state,action) => { 
          state.projectname =   state.projectname.filter(item => item.projectName !== action.payload);   
        }
    },
});

export const {userSelect, unSelect} = projectsSlice.actions;
export default projectsSlice.reducer;