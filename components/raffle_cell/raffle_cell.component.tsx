import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { switch_number_select } from "../../redux/utils/utils";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { select_raffleCell_byId } from "../../redux/raffle_cells/raffle_cells";

const RaffleCell = ({ item }: any) => {
  const dispatch = useDispatch<AppDispatch>();

  const selectNumber = () => {
    dispatch(switch_number_select());
    dispatch(select_raffleCell_byId(item.id));
  };
  return (
    <View style={styles.cell}>
      <Text style={{ fontSize: 20 }}>{item.id}</Text>
      <Text style={{ textAlign: "center" }}>
        {item.client_name ? item.client_name : "Não foi escolhido"}
      </Text>
      {item.client_name ? (
        <TouchableOpacity style={styles.button} disabled>
          <Text style={styles.buttonText}>Escolhido</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.button} onPress={selectNumber}>
          <Text style={styles.buttonText}>Escolher</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cell: {
    margin: 1,
    borderWidth: 1,
    borderColor: "red",
    width: 110,
    height: 110,
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    marginBottom: 5,
    backgroundColor: "black",
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 5,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },
});

export default RaffleCell;
