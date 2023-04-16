import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const RaffleItemButtons = ({ item }: any) => {
  const navigation: any = useNavigation();
  return (
    <>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Details", {
            item: item,
          });
        }}
      >
        <Text style={[styles.buttonText, { color: "blue" }]}>Ver</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={[styles.buttonText, { color: "red" }]}>Deletar</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    gap: 4,
    padding: 2,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default RaffleItemButtons;
