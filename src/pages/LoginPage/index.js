import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { SafeAreaView, Text, TextInput, Button } from "react-native";
import styles from "./style";

function LoginPage({ navigation }) {
  const [user, setUser] = useState("");

  async function handleAsyncStorage() {
    //armazena valor no asyncStorage
    await AsyncStorage.setItem("@User1", user);
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={{ borderWidth: 1, width: 100, height: 30 }}
        value={user}
        onChangeText={(text) => setUser(text)}
      />
      <Button
        title="Logar"
        onPress={() => {
          handleAsyncStorage();
          navigation.navigate("TabRoute");
        }}
      />

      <Text>Essa é a Login Page {user}</Text>
    </SafeAreaView>
  );
}

export default LoginPage;
