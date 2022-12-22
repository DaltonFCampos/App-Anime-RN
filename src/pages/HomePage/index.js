import React from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import styles from "./style";
import Header from "../../components/Header";

function HomePage() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        <Text>Essa é a Home Page</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomePage;
