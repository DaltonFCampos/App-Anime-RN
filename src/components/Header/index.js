import { View, Text, Image, SafeAreaView } from "react-native";
import styles from "./style";
import Icon from "@expo/vector-icons/Ionicons";

export default function () {
  const name = "Dalton";
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={styles.Image}
            source={require("../../assets/imgs/Profile-icon.jpg")}
          />
          <Text style={styles.text}>Hello, {name}</Text>
        </View>
        <Icon name="notifications-circle" size={50} color="#2EAEBE" light />
      </View>
    </SafeAreaView>
  );
}
