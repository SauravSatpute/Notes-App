import { createSlice } from "@reduxjs/toolkit";


const noteSlice = createSlice({
    name:"note",
    initialState:{
        showInput:false,
        clickedIndex:-1,
        data:[]
    },
    reducers:{
        toggleTrue : (state) => {
            state.showInput = true;
        },
        toggleFalse : (state) => {
            state.showInput = false;
        },
        setClickedIndex : (state,action) => {
            // console.log(action.payload)
            state.clickedIndex = action.payload;
        },
        fetchData : (state,action) => {
            state.data = action.payload;
        }
    }
});

export const { toggleFalse, toggleTrue, setClickedIndex,fetchData } = noteSlice.actions;

export default noteSlice.reducer;