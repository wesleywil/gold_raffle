import {
  Button,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  StyleSheet,
} from "react-native";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";

// Components
import PanelConfig from "../panel_config/panel_config.component";

const SelectCell = () => {
  const cell = useSelector(
    (state: RootState) => state.raffle_cells.raffle_cell
  );
  return (
    <View style={styles.selectContainer}>
      <PanelConfig />
      <Text style={styles.choosenText}>Numero escolhido - {cell.id}</Text>
      <Text style={styles.text}>Nome do Cliente</Text>
      <TextInput
        style={styles.textInput}
        defaultValue={cell.client_name ? cell.client_name : "Não foi escolhido"}
      />
      <Button title="Selecionar Numero" />
    </View>
  );
};

const styles = StyleSheet.create({
  selectContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -150 }, { translateY: -50 }],
    zIndex: 2,
    width: 300,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    overflow: "hidden",
  },
  choosenText: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    borderBottomWidth: 1,
    width: "90%",
    alignSelf: "center",
    marginBottom: 2,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
  },
  textInput: {
    fontSize: 20,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    color: "white",
    paddingVertical: 5,
    marginBottom: 5,
    marginHorizontal: 5,
  },
});

export default SelectCell;
