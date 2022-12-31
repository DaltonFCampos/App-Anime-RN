import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./style";
import Icon from "@expo/vector-icons/Ionicons";
import { Auth } from "../../Firebase/auth";

export default function () {
  const [name, setName] = useState("Nome");
  const currentUser = Auth.currentUser;

  useEffect(() => {
    setName(
      currentUser.displayName !== null ? currentUser.displayName : "Nome"
    );
  }, []);

  return (
    <SafeAreaView style={styles.container}>
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
        <Text numberOfLines={1} style={styles.text}>
          Hello, {name}
        </Text>
      </View>
      <TouchableOpacity onPress={() => {}}>
        <Icon name="notifications-circle" size={50} color="#2EAEBE" light />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
