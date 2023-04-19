import React, { useState } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  TextInput,
  StyleSheet,
} from "react-native";

import { Raffle } from "../../utils/models/models";
import { createRaffle } from "../../utils/services";

import screenStyles from "../../styles/screenStyles";

const CreateRaffleScreen = ({ navigation }: any) => {
  const [inputValues, seInputValues] = useState<Raffle>({} as Raffle);

  const handleSubmit = async () => {
    console.log(inputValues);
    try {
      const raffle = await createRaffle(inputValues);
      console.log("Raffle created", raffle);
      // Call your other function here passing raffle as an argument
      navigation.navigate("Home");
    } catch (error) {
      console.log(error);
    }
  };

  const updateInputValues = (key: string, value: string) => {
    seInputValues({ ...inputValues, [key]: value });
  };

  return (
    <View style={screenStyles.container}>
      <Text style={screenStyles.title}>Criar Nova Rifa</Text>
      <View style={screenStyles.contForm}>
        <Text style={screenStyles.formText}>Nome Da Rifa</Text>
        <TextInput
          onChangeText={(text: string) => updateInputValues("name", text)}
          style={screenStyles.formInput}
        />
        <Text style={screenStyles.formText}>Quantidade de Numeros</Text>
        <TextInput
          onChangeText={(text: string) => updateInputValues("quantity", text)}
          keyboardType="numeric"
          style={screenStyles.formInput}
        />
        <Text style={screenStyles.formText}>Preço</Text>
        <TextInput
          onChangeText={(text: string) => updateInputValues("price", text)}
          keyboardType="numeric"
          style={screenStyles.formInput}
        />
        <Text style={screenStyles.formText}>Data do Sorteio</Text>
        <TextInput
          onChangeText={(text: string) => updateInputValues("date", text)}
          style={screenStyles.formInput}
        />
        <View style={screenStyles.contButton}>
          <TouchableOpacity
            style={[screenStyles.button, { minWidth: "45%" }]}
            onPress={() => {
              handleSubmit();
            }}
          >
            <Text style={screenStyles.buttonText}>Criar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[screenStyles.button, { minWidth: "45%" }]}
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <Text style={screenStyles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CreateRaffleScreen;
