import { View, TouchableOpacity, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../redux/store";
import { switch_delete_raffle_hidden } from "../../redux/utils/utils";
import { deleteRaffle } from "../../redux/raffles/raffles";
import componentStyles from "../../styles/componentStyles";
import { deleteRaffle_cells } from "../../redux/raffle_cells/raffle_cells";

const PanelDelete = () => {
  const raffle_id = useSelector((state: RootState) => state.raffles.raffle.id)!;
  const dispatch = useDispatch<AppDispatch>();

  const handleDelete = () => {
    console.log("DELETING RAFFLE WITH ID=> ", raffle_id);
    Promise.all([
      dispatch(deleteRaffle_cells(raffle_id)),
      dispatch(deleteRaffle(raffle_id)),
      dispatch(switch_delete_raffle_hidden()),
    ]);
  };
  return (
    <View style={componentStyles.panelDeleteContainer}>
      <Text style={componentStyles.panelDeleteTitle}>
        Você tem certeza que gostaria de deletar essa RIFA?
      </Text>
      <View style={componentStyles.panelDeleteButtonContainer}>
        <TouchableOpacity onPress={() => handleDelete()}>
          <Text
            style={[componentStyles.panelDeleteButtonText, { color: "yellow" }]}
          >
            Sim
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => dispatch(switch_delete_raffle_hidden())}
        >
          <Text
            style={[
              componentStyles.panelDeleteButtonText,
              { color: "lightblue" },
            ]}
          >
            Não
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PanelDelete;
