import { createSlice } from "@reduxjs/toolkit";
import { increment } from "./counterSlice";

const like = createSlice({
  name: "increment2",
  initialState: {
    value: 10,
  },
  reducers: {
    threePlus: (e) => {
      e.value -= 3;
    },
  },
});

export const { threePlus, decrement } = counterSlice.actions;
