import { View, Text, StyleSheet } from "react-native";
import RaffleItemButtons from "../raffle_item_buttons/raffle_item_buttons.component";
import componentStyles from "../../styles/componentStyles";

const RaffleItem = ({ item }: any) => {
  return (
    <View style={componentStyles.container}>
      <View style={componentStyles.info}>
        <Text style={componentStyles.text}>{item.name} - </Text>
        <Text style={componentStyles.text}>{item.date}</Text>
      </View>
      <View style={componentStyles.buttons}>
        <RaffleItemButtons item={item} />
      </View>
    </View>
  );
};

export default RaffleItem;
