import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import HomeScreen from "./screens/home_screen/home_screen";
import RafflesScreen from "./screens/raffles_screen/raffles_screen";
import CreateRaffleScreen from "./screens/create_raffle_screen/create_raffle_screen";

// Utils
import DatabaseInit from "./utils/database";

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    const database = new DatabaseInit();
    console.log("initialize database!");
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Raffles" component={RafflesScreen} />
        <Stack.Screen name="CreateRaffle" component={CreateRaffleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
