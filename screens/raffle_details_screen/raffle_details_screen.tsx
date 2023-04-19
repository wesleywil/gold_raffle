import { useEffect } from "react";
import { TouchableOpacity, Text, View, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../redux/store";
import {
  fetchRaffleCells,
  randomNumber,
} from "../../redux/raffle_cells/raffle_cells";
// Components
import RaffleCell from "../../components/raffle_cell/raffle_cell.component";
import SelectCell from "../../components/select_cell/select_cell.component";
import screenStyles from "../../styles/screenStyles";

const RaffleDetailsScreen = ({ route, navigation }: any) => {
  const { item } = route.params;

  const cells = useSelector(
    (state: RootState) => state.raffle_cells.raffle_cells
  );
  const winner_cell = useSelector(
    (state: RootState) => state.raffle_cells.raffle_cell
  );
  const winner = useSelector((state: RootState) => state.raffle_cells.winner);
  const hidden = useSelector(
    (state: RootState) => state.utils.number_select_hidden
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    console.log("Raffle Details", item.id);
    dispatch(fetchRaffleCells(item.id));
  }, [item, navigation]);
  return (
    <View style={screenStyles.container}>
      <Text style={[screenStyles.title, { marginTop: 10 }]}>{item.name}</Text>
      {hidden ? "" : <SelectCell />}
      <TouchableOpacity
        style={screenStyles.raffleDetailsButton}
        onPress={() => dispatch(randomNumber())}
      >
        <Text style={screenStyles.raffleDetailsButtonText}>Sortear</Text>
      </TouchableOpacity>
      <Text style={{ color: "white" }}>
        {winner === "idle"
          ? ""
          : winner === "winner"
          ? "O vencedor é " + winner_cell.client_name
          : "A rifa não foi totalmente preenchida"}
      </Text>
      <FlatList
        style={screenStyles.mapContainer}
        data={cells}
        numColumns={3}
        renderItem={({ item }: any) => <RaffleCell item={item} />}
      />
    </View>
  );
};

export default RaffleDetailsScreen;
