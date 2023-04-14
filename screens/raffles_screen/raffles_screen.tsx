import { Button, View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { getAllRaffles, getAllRafflesCells } from "../../utils/services";

const RafflesScreen = ({ navigation }: any) => {
  useEffect(() => {
    console.log("Loading all Raffles");
    const fetchRaffles = async () => {
      try {
        // const raffles = await getAllRaffles();
        const raffles = await getAllRafflesCells(1);
        console.log(raffles);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRaffles();
  }, []);
  return (
    <View style={styles.container}>
      <Text>This is the Raffles Page</Text>
      <Button
        title="Go Back"
        onPress={() => navigation.goBack()}
        color="black"
      />
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
});

export default RafflesScreen;
