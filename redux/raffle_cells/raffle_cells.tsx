import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllRafflesCells,
  updateSelectedRaffleCell,
} from "../../utils/services";

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
  winner: string;
}

const initialState: RaffleCellState = {
  raffle_cells: [],
  raffle_cell: {} as RaffleCell,
  status: "idle",
  error: null,
  winner: "idle" || "winner" || "has numbers",
};

export const fetchRaffleCells = createAsyncThunk(
  "raffleCells/fetchRaffleCells",
  async (id: number) => {
    const res: any = await getAllRafflesCells(id);
    return res._array as RaffleCell[];
  }
);

export const selectRaffleCell = createAsyncThunk(
  "raffles/selectRaffleCell",
  async ({ client_name, id }: { client_name: string; id: number }) => {
    const res: any = await updateSelectedRaffleCell(client_name, id);
    console.log("RESULT OF THE UPDATE==> ", res);
    return res;
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
    randomNumber: (state) => {
      const allSelected = state.raffle_cells.every(
        (cell) => cell.selected === 1
      );
      if (allSelected) {
        const randomIndex = Math.floor(
          Math.random() * state.raffle_cells.length
        );
        const randomCell = state.raffle_cells[randomIndex];
        return {
          ...state,
          raffle_cell: randomCell,
          winner: "winner",
        };
      } else {
        return {
          ...state,
          winner: "has numbers",
        };
      }
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

export const { select_raffleCell_byId, randomNumber } =
  raffleCellsSlice.actions;

export default raffleCellsSlice.reducer;
