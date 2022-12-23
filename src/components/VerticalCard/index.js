import { memo } from "react";
import {
  SafeAreaView,
  Text,
  ImageBackground,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import styles from "./style";

function VerticalCard({ item }) {
  return (
    <SafeAreaView style={[styles.card, { width: 190, height: 350 }]}>
      <TouchableOpacity
        onPress={() => {
          Alert.alert("Anime: ", item.title);
        }}
      >
        <ImageBackground
          style={styles.Image}
          source={
            item.Image === undefined
              ? {
                  uri: "https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/922742d9acaeba7d887ed11b6caab0e4.jpe",
                }
              : item.Image == ""
              ? {
                  uri: "https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/922742d9acaeba7d887ed11b6caab0e4.jpe",
                }
              : { uri: item.Image }
          }
        ></ImageBackground>
        <View>
          <Text style={styles.tittle}>{item.title}</Text>
          <Text style={styles.tag}>
            {item.tag == undefined ? "" : item.tag.join(" - ")}
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default memo(VerticalCard);
