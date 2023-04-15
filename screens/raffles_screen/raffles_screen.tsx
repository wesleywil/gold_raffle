import { useEffect } from "react";
import { Button, View, ScrollView, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../redux/store";
import { fetchRaffles } from "../../redux/raffles/raffles";
import RaffleItem from "../../components/raffle_item/raffle_item.component";

const RafflesScreen = ({ navigation }: any) => {
  const raffles = useSelector((state: RootState) => state.raffles.raffles);
  const status = useSelector((state: RootState) => state.raffles.status);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    console.log("Fetching raffles");
    if (status === "idle") {
      dispatch(fetchRaffles());
    }
  }, [status]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todas as Rifas</Text>
      <Button
        title="Voltar"
        onPress={() => navigation.goBack()}
        color="black"
      />
      <ScrollView style={styles.list}>
        {raffles.length ? (
          raffles.map((item) => <RaffleItem key={item.id} item={item} />)
        ) : (
          <Text>NO RAFFLES</Text>
        )}
      </ScrollView>

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
    paddingTop: 20,
  },
  list: {
    marginTop: 4,
    gap: 4,
  },
  title: {
    marginBottom: 20,
    fontSize: 30,
    fontWeight: "bold",
    color: "#D6A758",
  },
});

export default RafflesScreen;
