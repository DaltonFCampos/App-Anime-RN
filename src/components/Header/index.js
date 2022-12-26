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
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function () {
  const [user, setUser] = useState("Seu Nome");

  async function getData() {
    //Busca o valor no asyncStorage
    const response = await AsyncStorage.getItem("@User1");
    if (response) {
      setUser(response);
    }
  }

  useEffect(() => {
    getData();
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
        <Text style={styles.text}>Hello, {user}</Text>
      </View>
      <TouchableOpacity onPress={() => {}}>
        <Icon name="notifications-circle" size={50} color="#2EAEBE" light />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
