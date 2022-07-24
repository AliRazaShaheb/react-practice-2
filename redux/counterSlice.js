import { createSlice } from "@reduxjs/toolkit";

const appState = {
  counter: 0
};

const counterSlice = createSlice({
  name: "counter",
  initialState: appState,
  reducers: {
    increment: (state, action) => {
      return { ...state, counter: state.counter + 1 };
    },
    decrement: (state, action) => {
      if (state.counter < 1) return state;
      return { ...state, counter: state.counter - 1 };
    }
  }
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
