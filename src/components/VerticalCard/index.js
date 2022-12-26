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

function VerticalCard({ item, navi }) {
  return (
    <SafeAreaView style={[styles.card, { width: 190, height: 350 }]}>
      <TouchableOpacity
        onPress={() => {
          navi.navigate("Reading Page", { id: item.id });
        }}
      >
        <Image
          style={styles.Image}
          source={
            item.VerticalImage === undefined
              ? {
                  uri: "https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/922742d9acaeba7d887ed11b6caab0e4.jpe",
                }
              : item.VerticalImage == ""
              ? {
                  uri: "https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/922742d9acaeba7d887ed11b6caab0e4.jpe",
                }
              : { uri: item.VerticalImage }
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

export default memo(VerticalCard);
