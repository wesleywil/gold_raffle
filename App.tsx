import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import HomeScreen from "./screens/home_screen/home_screen";
import RafflesScreen from "./screens/raffles_screen/raffles_screen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Raffles" component={RafflesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
