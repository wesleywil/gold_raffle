import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllRaffles,
  updateRaffle as raffleUpdate,
} from "../../utils/services";

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

export const updateRaffle = createAsyncThunk(
  "raffles/updateRaffle",
  async (data: Raffle) => {
    const res = await raffleUpdate(data);
    console.log("UPDATE RAFFLE ", res);
    return res;
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
      })
      .addCase(updateRaffle.pending, (state) => {
        state.status = "updating";
      })
      .addCase(updateRaffle.fulfilled, (state) => {
        state.status = "updated successfully";
      })
      .addCase(updateRaffle.rejected, (state) => {
        state.status = "update error";
      });
  },
});

export const {} = rafflesSlice.actions;

export default rafflesSlice.reducer;
