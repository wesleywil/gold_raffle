import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import componentStyles from "../../styles/componentStyles";

const RaffleItemButtons = ({ item }: any) => {
  const navigation: any = useNavigation();
  return (
    <>
      <TouchableOpacity
        style={componentStyles.button}
        onPress={() => {
          navigation.navigate("Details", {
            item: item,
          });
        }}
      >
        <Text style={[componentStyles.buttonText, { color: "white" }]}>
          Ver
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={componentStyles.button}>
        <Text style={[componentStyles.buttonText, { color: "yellow" }]}>
          Deletar
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default RaffleItemButtons;
