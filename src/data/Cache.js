// import AsyncStorage from "@react-native-async-storage/async-storage";

// const [user, setUser] = useState("");
//   const [valor, setValor] = useState("");

//   async function handleAsyncStorage() {
//     //armazena valor no asyncStorage
//     await AsyncStorage.setItem("@User1", user);
//     getData();
//   }

//   async function getData() {
//     //Busca o valor no asyncStorage
//     const response = await AsyncStorage.getItem("@User1");
//     if (response) {
//       setValor(response);
//     }
//   }

//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     <SafeAreaView style={styles.container}>
//       <TextInput
//         style={{ borderWidth: 1, width: 100, height: 30 }}
//         value={user}
//         onChangeText={(text) => setUser(text)}
//       />
//       <Button title="Enviar" onPress={handleAsyncStorage} />
//       <Button title="Printar" onPress={() => console.log(valor)} />

//       <Text>
//         Essa é a Search Page {user} {valor}
//       </Text>
//     </SafeAreaView>
//   );
