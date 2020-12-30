import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: "counter",
    initialState: {
        number: 0,
    },
    reducers: {
        increment: (state, action) => {
            state.number++;
            // state.number = action.payload;
        },
        decrement: (state, action) => {
            state.number--;
            // state.number = action.payload;
        },
    }
});

export default slice.reducer

//Actions

const { increment, decrement } = slice.actions

export const inc = () => async dispatch => {
    dispatch(increment())
}

export const dec = () => async dispatch => {
    dispatch(decrement())
}