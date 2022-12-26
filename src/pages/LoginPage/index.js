import AsyncStorage from "@react-native-async-storage/async-storage";
import { Entypo } from "@expo/vector-icons/";
import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  View,
  Image,
  ScrollView,
} from "react-native";
import Styles from "./style";

function LoginPage({ navigation }) {
  const [user, setUser] = useState("");
  const [PassWord, setPassword] = useState("");
  const [passwordHidden, setPasswordHidden] = useState(true);

  async function handleAsyncStorage() {
    //armazena valor no asyncStorage
    await AsyncStorage.setItem("@User1", user);
  }

  function logIn() {
    handleAsyncStorage();
    if (user) {
      navigation.navigate("TabRoute");
    } else {
      Alert.alert("Erro:", "Preencha o campo de login");
    }
  }

  return (
    <SafeAreaView style={Styles.container}>
      <SafeAreaView style={Styles.logoContainer}>
        <Image
          style={Styles.logo}
          source={require("../../assets/imgs/logo-Animepp.png")}
        />
      </SafeAreaView>
      <View
        style={{
          width: "90%",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <TextInput
          style={Styles.loginInput}
          placeholder="User-ID"
          placeholderTextColor={"#90939B"}
          value={user}
          onChangeText={(text) => setUser(text)}
        />

        <TextInput
          style={Styles.loginInput}
          placeholder="PassWord"
          placeholderTextColor={"#90939B"}
          autoCapitalize="none"
          secureTextEntry={passwordHidden}
          value={PassWord}
          onChangeText={(text) => {
            setPassword(text);
          }}
        />
        <TouchableOpacity
          style={Styles.iconPassword}
          onPress={() => {
            setPasswordHidden(!passwordHidden);
          }}
        >
          <Entypo
            name={passwordHidden ? "eye-with-line" : "eye"}
            color={passwordHidden ? "#90939B" : "#fff"}
            size={30}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={Styles.loginButton} onPress={() => logIn()}>
        <Text style={Styles.textButton}>Login</Text>
      </TouchableOpacity>

      <View style={Styles.forgotPassword}>
        <Text style={{ color: "#90939B" }}>Forgot Password?</Text>
        <TouchableOpacity>
          <Text style={{ color: "#2EAEBE" }}> Recover here</Text>
        </TouchableOpacity>
      </View>

      <View style={Styles.singUP}>
        <Text style={{ color: "#90939B" }}>Forgot Password?</Text>
        <TouchableOpacity>
          <Text style={{ color: "#2EAEBE" }}> Recover here</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default LoginPage;
