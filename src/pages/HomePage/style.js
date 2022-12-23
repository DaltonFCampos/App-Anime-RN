import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B1E26",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: 300,
    height: 300,
    borderRadius: 15,
    backgroundColor: "#999",
    marginVertical: 5,
    marginHorizontal: 5,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 10,
  },
  title: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 8,
    marginTop: 8,
  },
});
