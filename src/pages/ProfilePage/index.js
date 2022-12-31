import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import styles from "./style";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons/";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Auth } from "../../Firebase/auth";

function ProfilePage({ navigation }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("Nome");
  const currentUser = Auth.currentUser;

  async function logout() {
    try {
      await AsyncStorage.removeItem("@Email1");
      await AsyncStorage.removeItem("@Password1");
    } catch (error) {
      console.log(error);
    }

    navigation.navigate("Login Page");
  }

  useEffect(() => {
    if (currentUser !== null) {
      setEmail(currentUser.email !== null ? currentUser.email : "Email");
      setName(
        currentUser.displayName !== null ? currentUser.displayName : "Nome"
      );
    }
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={{ backgroundColor: "#1B1E26" }}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.profile}>
          <View style={styles.icon}>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="pencil-circle"
                size={50}
                color={"#2EAEBE"}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.image}>
            <Image
              style={styles.profileIcon}
              source={require("../../assets/imgs/Profile-icon.jpg")}
            />
          </View>

          <View style={styles.info}>
            <Text
              numberOfLines={1}
              style={{ fontWeight: "bold", color: "#fff", fontSize: 20 }}
            >
              {name}
            </Text>
            <Text numberOfLines={1} style={{ color: "#90939B", fontSize: 16 }}>
              {email}
            </Text>
          </View>
        </View>

        <View style={styles.menu}>
          <TouchableOpacity>
            <View style={styles.menuButton}>
              <Text
                style={{ color: "white", fontSize: 22, fontWeight: "bold" }}
              >
                Anime List
              </Text>
              <MaterialIcons name="navigate-next" size={35} color={"#fff"} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.menuButton}>
              <Text
                style={{ color: "white", fontSize: 22, fontWeight: "bold" }}
              >
                Watched
              </Text>
              <MaterialIcons name="navigate-next" size={35} color={"#fff"} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.menuButton}>
              <Text
                style={{ color: "white", fontSize: 22, fontWeight: "bold" }}
              >
                My Review
              </Text>
              <MaterialIcons name="navigate-next" size={35} color={"#fff"} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.menuButton}>
              <Text
                style={{ color: "white", fontSize: 22, fontWeight: "bold" }}
              >
                Settings
              </Text>
              <MaterialIcons name="navigate-next" size={35} color={"#fff"} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: "50%",
              height: 50,
              alignItems: "center",
              alignSelf: "center",
              justifyContent: "center",
              marginTop: 40,
            }}
            onPress={() => {
              logout();
            }}
          >
            <Text
              style={{ color: "#2EAEBE", fontWeight: "bold", fontSize: 22 }}
            >
              Log Out
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

export default ProfilePage;
