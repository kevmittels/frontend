import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    incrementCount: (state) => {
      state.count += 1;
    },
    resetCount: (state) => {
      state.count = 0;
    },
  },
});

export const selectCount = (state) => state.counter.count;

export const {
  incrementCount,
  resetCount,
} = counterSlice.actions;

export default counterSlice.reducer;
