import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B1E26",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    backgroundColor: "white",
    maxWidth: 400,
    minHeight: 600,
  },
  bio: {
    width: "100%",
    backgroundColor: "rgba(27, 30, 38,0.9)",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  button: {
    borderRadius: 100,
    position: "absolute",
    top: 20,
    left: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  button2: {
    width: 90,
    height: 90,
    borderRadius: 50,
    position: "absolute",
    top: -35,
    backfaceVisibility: "hidden",
  },
  textContainer: {
    width: "80%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
    marginTop: 70,
  },
  textTittle: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 4,
  },
  textSynopsis: {
    color: "#90939B",
    fontSize: 18,
    paddingHorizontal: 15,
  },
});
