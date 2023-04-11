import { Button, View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

const RafflesScreen = ({ navigation }: any) => {
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
