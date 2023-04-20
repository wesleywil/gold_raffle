import { createSlice } from "@reduxjs/toolkit";

export interface UtilsState {
  number_select_hidden: boolean;
  update_raffle_hidden: boolean;
}

const initialState: UtilsState = {
  number_select_hidden: true,
  update_raffle_hidden: true,
};

export const utilsSlice = createSlice({
  name: "utils",
  initialState,
  reducers: {
    switch_number_select: (state) => {
      state.number_select_hidden = !state.number_select_hidden;
    },
    switch_update_raffle_hidden: (state) => {
      state.update_raffle_hidden = !state.update_raffle_hidden;
    },
  },
});

export const { switch_number_select, switch_update_raffle_hidden } =
  utilsSlice.actions;

export default utilsSlice.reducer;
