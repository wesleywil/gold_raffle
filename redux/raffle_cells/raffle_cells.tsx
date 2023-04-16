import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllRafflesCells } from "../../utils/services";

export interface RaffleCell {
  id?: number;
  raffle_id: number;
  cell_number: number;
  selected: number;
  client_name?: string;
  price: number;
}

export interface RaffleCellState {
  raffle_cells: Array<RaffleCell>;
  status: string;
  error: any;
}

const initialState: RaffleCellState = {
  raffle_cells: [],
  status: "idle",
  error: null,
};

export const fetchRaffleCells = createAsyncThunk(
  "raffleCells/fetchRaffleCells",
  async (id: number) => {
    const res: any = await getAllRafflesCells(id);
    return res._array as RaffleCell[];
  }
);

export const raffleCellsSlice = createSlice({
  name: "raffles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRaffleCells.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRaffleCells.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        state.raffle_cells = payload;
      })
      .addCase(fetchRaffleCells.rejected, (state) => {
        state.status = "error";
      });
  },
});

export const {} = raffleCellsSlice.actions;

export default raffleCellsSlice.reducer;
