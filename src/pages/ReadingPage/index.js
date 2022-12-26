import React from "react";
import { SafeAreaView, Text, Button } from "react-native";
import Styles from "./style";

function ReadingPage({ navigation, route }) {
  const id = route.params.id;
  return (
    <SafeAreaView style={Styles.container}>
      <Text>Essa é a Reading Page</Text>
      <Text>Id do anime: {id}</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
}

export default ReadingPage;
