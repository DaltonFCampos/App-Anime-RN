import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Styles from "./style";
import NewData from "../../data/NewData.json";
import RecommendData from "../../data/RecommendData.json";
import Top10 from "../../data/Top10Data.json";
import { Ionicons } from "@expo/vector-icons/";

function ReadingPage({ navigation, route }) {
  const [Data, setData] = useState([
    ...Top10.data,
    ...RecommendData.data,
    ...NewData.data,
  ]);

  const [bio, setBio] = useState(true);
  const [anime, setAnime] = useState("");

  useEffect(() => {
    setAnime(Data.find((user) => user.id == route.params.id));
  }, []);

  const _verticalImage =
    anime.VerticalImage === undefined
      ? { uri: "https://telhafer.com.br/image/no_image.jpg" }
      : anime.VerticalImage === ""
      ? { uri: "https://telhafer.com.br/image/no_image.jpg" }
      : { uri: anime.VerticalImage };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={{ backgroundColor: "#1B1E26" }}
    >
      <SafeAreaView style={Styles.container}>
        <ImageBackground
          source={
            anime.fullScreenImage === undefined
              ? _verticalImage
              : anime.fullScreenImage === ""
              ? _verticalImage
              : { uri: anime.fullScreenImage }
          }
          resizeMode="stretch"
          style={Styles.image}
        >
          <TouchableOpacity onPress={navigation.goBack} style={Styles.button}>
            <View
              style={{
                backgroundColor: "black",
                width: 65,
                height: 65,
                borderRadius: 100,
                position: "absolute",
              }}
            ></View>
            <Ionicons name="chevron-back-circle" size={90} color={"#2EAEBE"} />
          </TouchableOpacity>

          <View style={[Styles.bio, { height: bio ? "50%" : "8%" }]}>
            <TouchableOpacity
              onPress={() => {
                setBio(!bio);
              }}
              style={Styles.button2}
            >
              <Ionicons
                name={bio ? "chevron-down-circle" : "chevron-up-circle"}
                size={90}
                color={"#2EAEBE"}
              />
            </TouchableOpacity>
            <View style={Styles.textContainer}>
              <Text style={Styles.textTittle}>{anime.title}</Text>
              <Text style={Styles.textSynopsis}>
                {anime.tag === undefined ? "" : anime.tag.join(" - ")}
              </Text>
              <Text
                style={[
                  Styles.textTittle,
                  { alignSelf: "flex-start", fontSize: 25 },
                ]}
              >
                Synopsis:{" "}
              </Text>
              <ScrollView
                style={{
                  height: 40,
                  marginTop: 10,
                }}
              >
                <Text style={Styles.textSynopsis}> {anime.synopsis}</Text>
              </ScrollView>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </ScrollView>
  );
}

export default ReadingPage;
