import { useEffect } from "react";
import {
  Button,
  Text,
  View,
  FlatList,
  StyleSheet,
  TextInput,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../redux/store";
import { fetchRaffleCells } from "../../redux/raffle_cells/raffle_cells";
// Components
import RaffleCell from "../../components/raffle_cell/raffle_cell.component";
import SelectCell from "../../components/select_cell/select_cell.component";
import screenStyles from "../../styles/screenStyles";

const RaffleDetailsScreen = ({ route, navigation }: any) => {
  const { item } = route.params;

  const cells = useSelector(
    (state: RootState) => state.raffle_cells.raffle_cells
  );
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
