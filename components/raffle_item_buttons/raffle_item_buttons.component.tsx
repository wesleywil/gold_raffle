import { Button, View, TouchableOpacity, Text, StyleSheet } from "react-native";

const RaffleItemButtons = () => {
  return (
    <>
      <TouchableOpacity style={styles.button}>
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
