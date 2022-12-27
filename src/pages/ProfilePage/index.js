import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, Button } from "react-native";
import styles from "./style";

import AsyncStorage from "@react-native-async-storage/async-storage";

function ProfilePage({ navigation }) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  async function logout() {
    try {
      await AsyncStorage.removeItem("@User1");
      await AsyncStorage.removeItem("@Password1");
    } catch (error) {
      console.log(error);
    }

    navigation.navigate("Login Page");
  }

  async function getData() {
    //Busca o valor no asyncStorage
    const asyncUser = await AsyncStorage.getItem("@User1");
    const asyncPassword = await AsyncStorage.getItem("@Password1");
    if (asyncUser && asyncPassword) {
      setUser(asyncUser);
      setPassword(asyncPassword);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Essa é a Profile Page</Text>
      <Button
        title="Log Usuario logado"
        onPress={() => {
          console.log(user + " | " + password);
        }}
      />

      <Button
        title="Deslogar"
        onPress={() => {
          logout();
        }}
      />
    </SafeAreaView>
  );
}

export default ProfilePage;
