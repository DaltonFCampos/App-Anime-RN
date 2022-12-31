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
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Auth } from "../../Firebase/auth";

function RegisterPage({ navigation }) {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [passWord, setPassword] = useState("");
  const [passwordHidden, setPasswordHidden] = useState(true);

  const handleCreateAccount = () => {
    if (userName === "" || userName === null || userName === undefined) {
      alert("User Name Invalido");
      return;
    }
    createUserWithEmailAndPassword(Auth, email, passWord)
      .then((userCredential) => {
        updateProfile(Auth.currentUser, {
          displayName: userName,
        })
          .then(() => {
            console.log("DisplayName adicionado");
          })
          .catch((error) => {
            console.log("DisplayName não foi adicionado");
          });

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
          placeholder="User Name"
          autoCapitalize="words"
          maxLength={30}
          placeholderTextColor={"#90939B"}
          onChangeText={(text) => setUserName(text.trim())}
        />

        <TextInput
          style={Styles.loginInput}
          placeholder="Email"
          autoCapitalize="none"
          placeholderTextColor={"#90939B"}
          onChangeText={(text) => setEmail(text.trim())}
        />

        <TextInput
          style={Styles.loginInput}
          placeholder="PassWord"
          placeholderTextColor={"#90939B"}
          autoCapitalize="none"
          secureTextEntry={passwordHidden}
          onChangeText={(text) => {
            setPassword(text.trim());
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
