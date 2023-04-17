import { createSlice } from "@reduxjs/toolkit";

export interface UtilsState {
  number_select_hidden: boolean;
}

const initialState: UtilsState = {
  number_select_hidden: true,
};

export const utilsSlice = createSlice({
  name: "utils",
  initialState,
  reducers: {
    switch_number_select: (state) => {
      state.number_select_hidden = !state.number_select_hidden;
    },
  },
});

export const { switch_number_select } = utilsSlice.actions;

export default utilsSlice.reducer;
