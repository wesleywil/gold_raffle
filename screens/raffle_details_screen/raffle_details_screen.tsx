import { useEffect } from "react";
import { Button, Text, View, FlatList, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../redux/store";
import { fetchRaffleCells } from "../../redux/raffle_cells/raffle_cells";
import RaffleCell from "../../components/raffle_cell/raffle_cell.component";

const RaffleDetailsScreen = ({ route, navigation }: any) => {
  const { item } = route.params;

  const cells = useSelector(
    (state: RootState) => state.raffle_cells.raffle_cells
  );
  const status = useSelector((state: RootState) => state.raffle_cells.status);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    console.log("Raffle Details", item.id);
    dispatch(fetchRaffleCells(item.id));
  }, [item, navigation]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.name}</Text>
      <FlatList
        style={styles.mapContainer}
        data={cells}
        numColumns={3}
        renderItem={RaffleCell}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  title: {
    marginTop: 15,
    fontSize: 30,
    fontWeight: "bold",
    color: "#D6A758",
  },
  mapContainer: {
    borderWidth: 1,
    borderColor: "red",
    padding: 5,
    flexWrap: "wrap",
    gap: 3,
  },
});

export default RaffleDetailsScreen;
