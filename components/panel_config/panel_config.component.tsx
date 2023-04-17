import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../redux/store";
import { switch_number_select } from "../../redux/utils/utils";

const PanelConfig = () => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <View style={styles.config}>
      <Text style={styles.configText}>nº 5</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          dispatch(switch_number_select());
        }}
      >
        <Text style={styles.buttonText}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  config: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "black",
    paddingVertical: 5,
  },
  configText: {
    marginLeft: 5,
    fontSize: 15,
    color: "white",
  },
  button: {
    marginRight: 10,
    backgroundColor: "white",
    paddingHorizontal: 5,
    borderRadius: 100,
  },
  buttonText: {
    color: "red",
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default PanelConfig;
