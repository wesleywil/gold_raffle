import { useEffect } from "react";
import {
  Button,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../redux/store";
import { fetchRaffles } from "../../redux/raffles/raffles";
import RaffleItem from "../../components/raffle_item/raffle_item.component";
import screenStyles from "../../styles/screenStyles";
import PanelDelete from "../../components/panel_delete/panel_delete.component";

const RafflesScreen = ({ navigation }: any) => {
  const raffles = useSelector((state: RootState) => state.raffles.raffles);
  const status = useSelector((state: RootState) => state.raffles.status);
  const hidden = useSelector(
    (state: RootState) => state.utils.delete_raffle_hidden
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    console.log("Fetching raffles");
    if (
      status === "idle" ||
      status === "created successfully" ||
      status === "updated successfully" ||
      status === "deleted successfully"
    ) {
      dispatch(fetchRaffles());
    }
  }, [status, raffles]);

  return (
    <View style={screenStyles.container}>
      <Text style={[screenStyles.title, { marginTop: 20 }]}>
        Todas as Rifas
      </Text>
      <TouchableOpacity
        style={[screenStyles.button, { minWidth: "45%" }]}
        onPress={() => navigation.goBack()}
      >
        <Text style={screenStyles.buttonText}>Voltar</Text>
      </TouchableOpacity>
      {hidden ? "" : <PanelDelete />}

      <ScrollView style={screenStyles.list}>
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

export default RafflesScreen;
