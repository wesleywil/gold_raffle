import { useState } from "react";
import { Text, TouchableOpacity, View, TextInput } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../redux/store";
import { selectRaffleCell } from "../../redux/raffle_cells/raffle_cells";
import { switch_number_select } from "../../redux/utils/utils";
// Components
import PanelConfig from "../panel_config/panel_config.component";
import componentStyles from "../../styles/componentStyles";

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
    <View style={componentStyles.selectContainer}>
      <PanelConfig />
      <Text style={componentStyles.choosenText}>
        Numero escolhido - {cell.id}
      </Text>
      <Text
        style={[
          componentStyles.text,
          { textAlign: "center", color: "#e1b058" },
        ]}
      >
        Nome do Cliente
      </Text>
      <TextInput
        style={componentStyles.textInput}
        onChangeText={handleInputChange}
      />
      <TouchableOpacity
        onPress={handleSelect}
        style={componentStyles.selectCellButton}
      >
        <Text style={componentStyles.buttonText}>Selecionar Numero</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SelectCell;
