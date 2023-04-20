import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../redux/store";
import { View, TouchableOpacity, Text } from "react-native";
import { randomNumber } from "../../redux/raffle_cells/raffle_cells";

import componentStyles from "../../styles/componentStyles";
import { switch_update_raffle_hidden } from "../../redux/utils/utils";

const RaffleDetailsMenu = () => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <View style={componentStyles.raffleDetailsMenuContainer}>
      <TouchableOpacity
        style={componentStyles.raffleDetailsMenuButton}
        onPress={() => dispatch(switch_update_raffle_hidden())}
      >
        <Text style={componentStyles.raffleDetailsMenuButtonText}>
          Atualizar
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={componentStyles.raffleDetailsMenuButton}
        onPress={() => dispatch(randomNumber())}
      >
        <Text style={componentStyles.raffleDetailsMenuButtonText}>Sortear</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RaffleDetailsMenu;
