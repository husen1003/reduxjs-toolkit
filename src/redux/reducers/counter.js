import { createReducer } from "@reduxjs/toolkit";
import {
    inc,
    dec
} from '../actions/counter';

const initialState = {
    number: 0,
}

const counterReducer = createReducer(initialState, (builder) => {
    builder
      .addCase(inc, (state) => {
        state.number++;
      })
      .addCase(dec, (state) => {
        state.number--;
      })
    });

export default counterReducer;