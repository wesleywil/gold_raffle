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
  raffle_cell: RaffleCell;
  status: string;
  error: any;
}

const initialState: RaffleCellState = {
  raffle_cells: [],
  raffle_cell: {} as RaffleCell,
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
  reducers: {
    select_raffleCell_byId: (state, { payload }) => {
      state.raffle_cell = state.raffle_cells.find(
        (item) => item.id === payload
      )!;
    },
  },
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

export const { select_raffleCell_byId } = raffleCellsSlice.actions;

export default raffleCellsSlice.reducer;
