import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  FlatList,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./style";
import NewData from "../../data/NewData.json";
import RecommendData from "../../data/RecommendData.json";
import Top10 from "../../data/Top10Data.json";
import HorizontalCard from "../../components/HorizontalCard";
import Icon from "@expo/vector-icons/FontAwesome";

function SearchPage() {
  const [Data, setData] = useState([
    ...Top10.data,
    ...RecommendData.data,
    ...NewData.data,
  ]);

  const [originalData, setOriginalData] = useState([
    ...Top10.data,
    ...RecommendData.data,
    ...NewData.data,
  ]);

  function searchAnime(search) {
    setData(originalData.filter((d) => d.title.toLowerCase().includes(search)));
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <Icon
          style={styles.searchIcon}
          name="search"
          color={"white"}
          size={20}
        />
        <TextInput
          style={styles.searchInput}
          onChangeText={(search) => searchAnime(search.toLowerCase())}
          placeholder="Search Here"
          placeholderTextColor={"white"}
        />
      </View>
      <FlatList data={Data} renderItem={_renderitem} initialNumToRender={5} />
    </SafeAreaView>
  );
}

const _renderitem = ({ item }) => <HorizontalCard item={item} />;

export default SearchPage;
