import { createSlice } from "@reduxjs/toolkit";

const initialState = {value:false}


const hamburgerSlice = createSlice({
    name:'hamburgerMenu',
    initialState,
    reducers:{
        toggle: (state) => {state.value = !state.value},
        close: (state) => {state.value = false},
    }
})

export const {toggle, close} = hamburgerSlice.actions

export default hamburgerSlice.reducer
