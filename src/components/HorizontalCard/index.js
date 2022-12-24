import { memo } from "react";
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import styles from "./style";

function HorizontalCard({ item }) {
  return (
    <SafeAreaView style={styles.card}>
      <TouchableOpacity
        onPress={() => {
          Alert.alert("Anime: ", item.title);
        }}
      >
        <Image
          style={styles.Image}
          source={
            item.horizontalImage === undefined
              ? {
                  uri: "https://telhafer.com.br/image/no_image.jpg",
                }
              : item.horizontalImage == ""
              ? {
                  uri: "https://telhafer.com.br/image/no_image.jpg",
                }
              : { uri: item.horizontalImage }
          }
        ></Image>

        <View>
          <Text numberOfLines={1} style={styles.tittle}>
            {item.title}
          </Text>
          <Text numberOfLines={1} style={styles.tag}>
            {item.tag == undefined ? "" : item.tag.join(" - ")}
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default memo(HorizontalCard);
