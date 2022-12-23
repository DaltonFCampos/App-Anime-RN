import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B1E26",
    alignItems: "center",
    justifyContent: "center",
  },
  searchContainer: {
    backgroundColor: "#2D3240",
    borderRadius: 10,
    width: 350,
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 12,
  },
  searchInput: {
    paddingLeft: 35,
    flex: 1,
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  searchIcon: {
    position: "absolute",
    left: 8,
  },
});
