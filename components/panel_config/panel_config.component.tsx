import { TouchableOpacity, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../redux/store";
import { switch_number_select } from "../../redux/utils/utils";
import componentStyles from "../../styles/componentStyles";

const PanelConfig = () => {
  const cell = useSelector(
    (state: RootState) => state.raffle_cells.raffle_cell
  );
  const dispatch = useDispatch<AppDispatch>();
  return (
    <View style={componentStyles.config}>
      <Text style={componentStyles.configText}>nº {cell.id}</Text>
      <TouchableOpacity
        style={componentStyles.PanelConfigButton}
        onPress={() => {
          dispatch(switch_number_select());
        }}
      >
        <Text style={componentStyles.PanelConfigButtonText}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PanelConfig;
