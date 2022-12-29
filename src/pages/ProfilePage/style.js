import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#1B1E26",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  profile: {
    width: "100%",
    height: "40%",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  menu: {
    flex: 1,
    width: "100%",
    height: "60%",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  icon: {
    alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  image: {
    width: 210,
    height: 210,
    justifyContent: "center",
    alignItems: "center",
  },
  info: {
    width: "100%",
    height: "20%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
    resizeMode: "contain",
  },
  menuButton: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 10,
    marginVertical: 10,
  },
});
