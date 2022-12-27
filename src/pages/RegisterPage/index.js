import { Entypo } from "@expo/vector-icons/";
import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import Styles from "./style";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Auth } from "../../Firebase/auth";

function RegisterPage({ navigation }) {
  const [user, setUser] = useState("");
  const [passWord, setPassword] = useState("");
  const [passwordHidden, setPasswordHidden] = useState(true);

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(Auth, user, passWord)
      .then((userCredential) => {
        alert("Conta criada");
        const usuario = userCredential.user;
        console.log(usuario);
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <SafeAreaView style={Styles.container}>
      <SafeAreaView style={Styles.logoContainer}>
        <Image
          style={Styles.logo}
          source={require("../../assets/imgs/logo-Animepp.png")}
        />
        <Text style={Styles.textRegister}> Register </Text>
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
          onChangeText={(text) => setUser(text)}
        />

        <TextInput
          style={Styles.loginInput}
          placeholder="PassWord"
          placeholderTextColor={"#90939B"}
          autoCapitalize="none"
          secureTextEntry={passwordHidden}
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

      <TouchableOpacity
        style={Styles.loginButton}
        onPress={() => {
          handleCreateAccount();
        }}
      >
        <Text style={Styles.textButton}>Register</Text>
      </TouchableOpacity>

      <View style={Styles.singUP}>
        <Text style={{ color: "#90939B" }}>You already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{ color: "#2EAEBE" }}> Login here</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default RegisterPage;
