import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../redux/store";
import { View, Text } from "react-native";
import { reset_winner_message } from "../../redux/raffle_cells/raffle_cells";

const RaffleMessage = () => {
  const winner = useSelector((state: RootState) => state.raffle_cells.winner);
  const winner_cell = useSelector(
    (state: RootState) => state.raffle_cells.raffle_cell
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (winner === "has numbers") {
      setTimeout(() => {
        dispatch(reset_winner_message());
      }, 3000);
    }
  }, [winner]);
  return (
    <View>
      <Text style={{ color: "white" }}>
        {winner === "idle"
          ? ""
          : winner === "winner"
          ? "O vencedor é " + winner_cell.client_name
          : "A rifa não foi totalmente preenchida"}
      </Text>
    </View>
  );
};

export default RaffleMessage;
