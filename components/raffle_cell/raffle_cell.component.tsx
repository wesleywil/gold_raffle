import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

const RaffleCell = ({ item }: any) => {
  return (
    <View style={styles.cell}>
      <Text style={{ fontSize: 20 }}>{item.id}</Text>
      <Text style={{ textAlign: "center" }}>
        {item.client_name ? item.client_name : "Não foi escolhido"}
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Escolher</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cell: {
    margin: 1,
    borderWidth: 1,
    borderColor: "red",
    width: 110,
    height: 110,
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    marginBottom: 5,
    backgroundColor: "black",
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 5,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },
});

export default RaffleCell;
