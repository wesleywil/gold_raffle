import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { TouchableOpacity, View, Text, TextInput } from "react-native";
import { Raffle } from "../../utils/models/models";
import { switch_update_raffle_hidden } from "../../redux/utils/utils";

import componentStyles from "../../styles/componentStyles";

const UpdateRaffle = ({ item }: any) => {
  const [inputValues, setInputValues] = useState<Raffle>({} as Raffle);
  const dispatch = useDispatch<AppDispatch>();

  const updateInputValues = ({
    name,
    value,
  }: {
    name: keyof Raffle;
    value: Raffle[keyof Raffle];
  }) => {
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleSubmit = async () => {
    console.log("Submit Data: ", inputValues);
  };

  return (
    <View style={componentStyles.updateRaffleContainer}>
      <Text style={componentStyles.updateRaffleTitle}>Atualizar Rifa</Text>
      <View style={componentStyles.updateRaffleSubContainer}>
        <Text style={componentStyles.updateRaffleText}>Nome da Rifa</Text>
        <TextInput
          defaultValue={item.name}
          onChangeText={(text) =>
            updateInputValues({ name: "name", value: text })
          }
          style={componentStyles.updateRaffleInput}
        />
        <Text style={componentStyles.updateRaffleText}>Preço do numero</Text>
        <TextInput
          defaultValue={item.price.toString()}
          onChangeText={(text) =>
            updateInputValues({ name: "price", value: Number(text) })
          }
          keyboardType="numeric"
          style={componentStyles.updateRaffleInput}
        />
        <Text style={componentStyles.updateRaffleText}>Data do Sorteio</Text>
        <TextInput
          defaultValue={item.date}
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
