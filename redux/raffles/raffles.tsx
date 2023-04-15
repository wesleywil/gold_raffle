import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllRaffles } from "../../utils/services";

export interface Raffle {
  id?: number;
  name: string;
  quantity: number;
  description?: string;
  date: string;
  price: number;
}

export interface RafflesState {
  raffles: Array<Raffle>;
  status: string;
  error: any;
}

const initialState: RafflesState = {
  raffles: [],
  status: "idle",
  error: null,
};

export const fetchRaffles = createAsyncThunk(
  "raffles/fetchRaffles",
  async () => {
    const res: any = await getAllRaffles();
    console.log("DATA => ");
    return res._array as Raffle[];
  }
);

export const rafflesSlice = createSlice({
  name: "raffles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRaffles.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRaffles.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        state.raffles = payload;
      })
      .addCase(fetchRaffles.rejected, (state) => {
        state.status = "error";
      });
  },
});

export const {} = rafflesSlice.actions;

export default rafflesSlice.reducer;
