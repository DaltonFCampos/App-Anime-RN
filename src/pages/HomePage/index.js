import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  SectionList,
  FlatList,
  useWindowDimensions,
} from "react-native";
import styles from "./style";
import Header from "../../components/Header";
import VerticalCard from "../../components/VerticalCard";
import NewData from "../../data/NewData.json";
import RecommendData from "../../data/RecommendData.json";
import Top10 from "../../data/Top10Data.json";

function HomePage() {
  const tamanho = useWindowDimensions();
  const Data = [Top10, RecommendData, NewData];
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        ListHeaderComponent={<Header />}
        style={{ width: tamanho.width }}
        stickySectionHeadersEnabled={false}
        scrollEnabled={true}
        sections={Data}
        initialNumToRender={5}
        // Render Horizontal
        renderSectionHeader={({ section }) => (
          <View>
            <Text style={styles.title}>
              {section.title} {">>>"}
            </Text>
            {section.horizontal && (
              <FlatList
                data={section.data}
                horizontal
                renderItem={_renderitem}
              />
            )}
          </View>
        )}
        // Render Vertical
        renderItem={({ item, section }) => {
          if (section.horizontal) {
            return null;
          }
          return (
            <View
              style={{
                alignItems: "center",
              }}
            >
              <VerticalCard item={item} />
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}

const _renderitem = ({ item }) => <VerticalCard item={item} />;

export default HomePage;
