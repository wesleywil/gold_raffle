import { View, Text, StyleSheet } from "react-native";
import RaffleItemButtons from "../raffle_item_buttons/raffle_item_buttons.component";

const RaffleItem = ({ item }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.text}>{item.name} - </Text>
        <Text style={styles.text}>{item.date}</Text>
      </View>
      <View style={styles.buttons}>
        <RaffleItemButtons item={item} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 2,
    minWidth: "85%",
    backgroundColor: "black",
    padding: 5,
    flexDirection: "row",
    color: "white",
    borderRadius: 5,
    justifyContent: "space-between",
  },
  info: {
    paddingVertical: 2,
    paddingHorizontal: 4,
    borderWidth: 1,
    borderColor: "white",
    flexDirection: "row",
    flexGrow: 1,
    gap: 4,
  },
  buttons: {
    width: 150,
    height: 40,
    borderWidth: 1,
    borderColor: "white",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: 2,
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});

export default RaffleItem;
