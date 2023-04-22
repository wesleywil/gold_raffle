import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllRaffles,
  updateRaffle as raffleUpdate,
  deleteRaffle as raffleDelete,
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
  raffle: Raffle;
  status: string;
  error: any;
}

const initialState: RafflesState = {
  raffles: [],
  raffle: {} as Raffle,
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

export const deleteRaffle = createAsyncThunk(
  "raffles/deleteRaffle",
  async (id: number) => {
    const res = await raffleDelete(id);
    console.log("Deleting raffle => ", res);
    return res;
  }
);

export const rafflesSlice = createSlice({
  name: "raffles",
  initialState,
  reducers: {
    select_raffle_byId: (state, { payload }) => {
      state.raffle = state.raffles.find((item) => item.id === payload)!;
    },
  },
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
      })
      .addCase(deleteRaffle.pending, (state) => {
        state.status = "deleting";
      })
      .addCase(deleteRaffle.fulfilled, (state) => {
        state.status = "deleted successfully";
      })
      .addCase(deleteRaffle.rejected, (state) => {
        state.status = "delete error";
      });
  },
});

export const { select_raffle_byId } = rafflesSlice.actions;

export default rafflesSlice.reducer;
