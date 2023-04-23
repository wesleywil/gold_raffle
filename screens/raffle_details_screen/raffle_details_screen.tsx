import { useEffect } from "react";
import { Text, View, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../redux/store";
import { fetchRaffleCells } from "../../redux/raffle_cells/raffle_cells";
// Components
import RaffleCell from "../../components/raffle_cell/raffle_cell.component";
import SelectCell from "../../components/select_cell/select_cell.component";
import RaffleMessage from "../../components/raffle_message/raffle_message.component";

// Styles
import screenStyles from "../../styles/screenStyles";
import RaffleDetailsMenu from "../../components/raffle_details_menu/raffle_details_menu.component";
import UpdateRaffle from "../../components/update_raffle/update_raffle.component";

const RaffleDetailsScreen = ({ route }: any) => {
  const { item } = route.params;

  const cells = useSelector(
    (state: RootState) => state.raffle_cells.raffle_cells
  );
  const hidden_cell = useSelector(
    (state: RootState) => state.utils.number_select_hidden
  );
  const hidden_update = useSelector(
    (state: RootState) => state.utils.update_raffle_hidden
  );
  const status_cell = useSelector(
    (state: RootState) => state.raffle_cells.status
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    console.log("Raffle Details", item);
    if (status_cell === "idle" || status_cell === "cell was selected") {
      dispatch(fetchRaffleCells(item.id));
    }
  }, [item, status_cell]);
  return (
    <View style={screenStyles.container}>
      <Text style={[screenStyles.title, { marginTop: 10 }]}>{item.name}</Text>
      <Text style={[screenStyles.raffleDetailsPrice, { marginTop: 2 }]}>
        Preço p/Numero - R$ {item.price}
      </Text>
      {hidden_cell ? "" : <SelectCell />}
      {hidden_update ? "" : <UpdateRaffle {...item} />}

      <RaffleDetailsMenu />
      <RaffleMessage />
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
