import { useState } from "react";
import {
  Button,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  StyleSheet,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../redux/store";
import { selectRaffleCell } from "../../redux/raffle_cells/raffle_cells";
import { switch_number_select } from "../../redux/utils/utils";
// Components
import PanelConfig from "../panel_config/panel_config.component";

const SelectCell = () => {
  const [inputValue, setInputValue] = useState("");
  const cell = useSelector(
    (state: RootState) => state.raffle_cells.raffle_cell
  );
  const dispatch = useDispatch<AppDispatch>();

  const handleSelect = async () => {
    try {
      const data = {
        client_name: inputValue,
        id: cell.id!,
      };

      const res = await dispatch(selectRaffleCell(data));
      dispatch(switch_number_select());
      console.log("aaaah", res);
    } catch (error) {
      console.log("Error in trying to update cell", error);
    }
  };

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };
  return (
    <View style={styles.selectContainer}>
      <PanelConfig />
      <Text style={styles.choosenText}>Numero escolhido - {cell.id}</Text>
      <Text style={styles.text}>Nome do Cliente</Text>
      <TextInput style={styles.textInput} onChangeText={handleInputChange} />
      <Button title="Selecionar Numero" onPress={handleSelect} />
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
    color: "black",
    paddingVertical: 5,
    marginBottom: 5,
    marginHorizontal: 5,
  },
});

export default SelectCell;
