import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B1E26",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  loginInput: {
    backgroundColor: "#2D3240",
    width: "100%",
    marginBottom: 20,
    height: 58,
    paddingLeft: 30,
    color: "#fff",
    fontSize: 22,
    borderRadius: 8,
  },
  loginButton: {
    backgroundColor: "#2EAEBE",
    height: 58,
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    marginTop: 20,
    borderRadius: 8,
  },
  iconPassword: {
    position: "absolute",
    bottom: 33,
    right: 20,
  },
  textButton: {
    color: "#2D3240",
    fontSize: 22,
  },
  logoContainer: {
    height: "40%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    margintop: 20,
  },
  logo: {
    flex: 1,
    Width: undefined,
    Height: undefined,
    resizeMode: "contain",
    marginTop: 40,
  },
  forgotPassword: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  singUP: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingVertical: 60,
  },
});
