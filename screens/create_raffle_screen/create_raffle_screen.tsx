import {
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from "react-native";

const CreateRaffleScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Nova Rifa</Text>
      <View style={styles.contForm}>
        <Text style={styles.formText}>Nome Da Rifa</Text>
        <TextInput style={styles.formInput} />
        <Text style={styles.formText}>Quantidade de Numeros</Text>
        <TextInput keyboardType="numeric" style={styles.formInput} />
        <View style={styles.contButton}>
          <TouchableOpacity
            style={[styles.button, { minWidth: "45%" }]}
            onPress={() => {}}
          >
            <Text style={styles.buttonText}>Criar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { minWidth: "45%" }]}
            onPress={() => {}}
          >
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
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
  contForm: {
    width: "90%",
    marginTop: 5,
    padding: 5,
    borderWidth: 1,
    borderColor: "#D6A758",
    borderRadius: 5,
  },
  formText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  formInput: {
    fontSize: 30,
    padding: 2,
    backgroundColor: "#594625",
    color: "white",
    borderRadius: 5,
  },
  contButton: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  button: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default CreateRaffleScreen;
