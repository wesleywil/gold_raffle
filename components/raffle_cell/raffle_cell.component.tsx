import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { switch_number_select } from "../../redux/utils/utils";
import { TouchableOpacity, Text, View } from "react-native";
import { select_raffleCell_byId } from "../../redux/raffle_cells/raffle_cells";
import componentStyles from "../../styles/componentStyles";

const RaffleCell = ({ item }: any) => {
  const dispatch = useDispatch<AppDispatch>();

  const selectNumber = () => {
    dispatch(switch_number_select());
    dispatch(select_raffleCell_byId(item.id));
  };
  return (
    <View style={componentStyles.cell}>
      <Text style={[componentStyles.raffleCellText, { fontSize: 20 }]}>
        {item.id}
      </Text>
      <Text style={[componentStyles.raffleCellText, { textAlign: "center" }]}>
        {item.client_name ? item.client_name : "Não foi escolhido"}
      </Text>
      {item.client_name ? (
        <TouchableOpacity
          style={[
            componentStyles.raffleCellButton,
            { backgroundColor: "#6E5530" },
          ]}
          disabled
        >
          <Text style={componentStyles.raffleCellButtonText}>Escolhido</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={[
            componentStyles.raffleCellButton,
            { backgroundColor: "#c69957" },
          ]}
          onPress={selectNumber}
        >
          <Text style={componentStyles.raffleCellButtonText}>Escolher</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default RaffleCell;
