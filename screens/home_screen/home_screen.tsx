import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Golden Rifa</Text>
      <Text>Total de Rifas Abertas: 3</Text>
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Abrir Nova Rifa */}
        <TouchableOpacity
          style={[styles.button, { minWidth: "80%" }]}
          onPress={() => navigation.navigate("Raffles")}
        >
          <Text style={styles.buttonText}>Nova Rifa</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { minWidth: "80%" }]}
          onPress={() => navigation.navigate("Raffles")}
        >
          <Text style={styles.buttonText}>Ver Rifas</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { minWidth: "80%" }]}
          onPress={() => navigation.navigate("Raffles")}
        >
          <Text style={styles.buttonText}>Ultima Rifa Modificada</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#D6A758",
  },
  button: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default HomeScreen;
