import { TouchableOpacity, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import screenStyles from "../../styles/screenStyles";

const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={screenStyles.container}>
      <Text style={screenStyles.title}>Golden Rifa</Text>
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Abrir Nova Rifa */}
        <TouchableOpacity
          style={[screenStyles.button, { minWidth: "80%" }]}
          onPress={() => navigation.navigate("CreateRaffle")}
        >
          <Text style={screenStyles.buttonText}>Nova Rifa</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[screenStyles.button, { minWidth: "80%" }]}
          onPress={() => navigation.navigate("Raffles")}
        >
          <Text style={screenStyles.buttonText}>Ver Rifas</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

export default HomeScreen;
