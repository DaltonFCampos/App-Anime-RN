import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, Button } from "react-native";
import Styles from "./style";
import NewData from "../../data/NewData.json";
import RecommendData from "../../data/RecommendData.json";
import Top10 from "../../data/Top10Data.json";

function ReadingPage({ navigation, route }) {
  const [Data, setData] = useState([
    ...Top10.data,
    ...RecommendData.data,
    ...NewData.data,
  ]);

  const [anime, setAnime] = useState("");

  useEffect(() => {
    setAnime(Data.find((user) => user.id == route.params.id));
  }, []);

  return (
    <SafeAreaView style={Styles.container}>
      <Text>ID Passado {route.params.id}</Text>
      <Text>ID do anime: {anime.id}</Text>
      <Text>Nome do anime: {anime.title}</Text>

      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
}

export default ReadingPage;
