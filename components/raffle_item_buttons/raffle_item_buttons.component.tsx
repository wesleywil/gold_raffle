import { TouchableOpacity, Text } from "react-native";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../redux/store";
import { useNavigation } from "@react-navigation/native";
import { switch_delete_raffle_hidden } from "../../redux/utils/utils";
import { select_raffle_byId } from "../../redux/raffles/raffles";
import componentStyles from "../../styles/componentStyles";

const RaffleItemButtons = ({ item }: any) => {
  const navigation: any = useNavigation();
  const dispatch = useDispatch<AppDispatch>();

  const handleShowPanel = () => {
    dispatch(select_raffle_byId(item.id));
    dispatch(switch_delete_raffle_hidden());
  };
  return (
    <>
      <TouchableOpacity
        style={componentStyles.button}
        onPress={() => {
          navigation.navigate("Details", {
            item: item,
          });
        }}
      >
        <Text style={[componentStyles.buttonText, { color: "white" }]}>
          Ver
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={componentStyles.button}
        onPress={() => handleShowPanel()}
      >
        <Text style={[componentStyles.buttonText, { color: "yellow" }]}>
          Deletar
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default RaffleItemButtons;
