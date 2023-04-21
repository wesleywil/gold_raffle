import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { TouchableOpacity, View, Text, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { switch_update_raffle_hidden } from "../../redux/utils/utils";
import { updateRaffle } from "../../redux/raffles/raffles";
import { Raffle } from "../../utils/models/models";

import componentStyles from "../../styles/componentStyles";

const UpdateRaffle = ({ name, price, date, id }: Raffle) => {
  const [inputValues, setInputValues] = useState<Raffle>({
    name,
    price,
    date,
    id,
  } as Raffle);
  const dispatch = useDispatch<AppDispatch>();
  const navigation: any = useNavigation();

  const updateInputValues = ({
    name,
    value,
  }: {
    name: keyof Raffle;
    value: Raffle[keyof Raffle];
  }) => {
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleSubmit = () => {
    console.log("Submit Data: ", inputValues);
    Promise.all([
      dispatch(updateRaffle({ ...inputValues, id })),
      dispatch(switch_update_raffle_hidden()),
    ]).then(() => {
      navigation.navigate("Raffles");
    });
  };

  return (
    <View style={componentStyles.updateRaffleContainer}>
      <Text style={componentStyles.updateRaffleTitle}>Atualizar Rifa</Text>
      <View style={componentStyles.updateRaffleSubContainer}>
        <Text style={componentStyles.updateRaffleText}>Nome da Rifa</Text>
        <TextInput
          defaultValue={name}
          onChangeText={(text) =>
            updateInputValues({ name: "name", value: text })
          }
          style={componentStyles.updateRaffleInput}
        />
        <Text style={componentStyles.updateRaffleText}>Preço do numero</Text>
        <TextInput
          defaultValue={price.toString()}
          onChangeText={(text) =>
            updateInputValues({ name: "price", value: Number(text) })
          }
          keyboardType="numeric"
          style={componentStyles.updateRaffleInput}
        />
        <Text style={componentStyles.updateRaffleText}>Data do Sorteio</Text>
        <TextInput
          defaultValue={date}
          onChangeText={(text) =>
            updateInputValues({ name: "date", value: text })
          }
          style={componentStyles.updateRaffleInput}
        />
        <View style={componentStyles.updateRaffleButtonsContainer}>
          <TouchableOpacity
            style={componentStyles.raffleDetailsMenuButton}
            onPress={() => handleSubmit()}
          >
            <Text style={componentStyles.raffleDetailsMenuButtonText}>
              Atualizar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={componentStyles.raffleDetailsMenuButton}
            onPress={() => dispatch(switch_update_raffle_hidden())}
          >
            <Text style={componentStyles.raffleDetailsMenuButtonText}>
              Cancelar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default UpdateRaffle;
