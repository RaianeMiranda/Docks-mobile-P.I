import * as React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import {
  Modal,
  Text,
  Button,
  TextInput,
} from "react-native-paper";
import { addDoc, collection, deleteDoc, doc, onSnapshot, updateDoc } from "firebase/firestore"
import { colors, locations, styles } from "../config/styles";
import { LinearGradient } from "expo-linear-gradient";
import { auth, database } from "../config/firebase/firebase";
import { useState, useEffect } from "react";

export const BiblioScreen = ({ route, navigation }) => {
  const [livros, setLivros] = useState([]);

  const user = auth.currentUser;
  if (!user) {
    throw new Error("Usuário não autenticado.");
  }
  console.log(user.uid)


  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(database, "livros"),
      (querySnapshot) => {
        const livroTemp = []
        querySnapshot.forEach((doc) => {
          livroTemp.push({
            ...doc.data(),
            id: doc.id
          })
        })
        setLivros(livroTemp)
      }
    )

    return () => unsubscribe()
  }, [])


  function handleExcluir(livro) {
    // deleteDoc é responsável pela exclusão do dado em uma coleção "Tabela"

    deleteDoc(
      doc(database, "livros", livro.id)
    ).then(() => {
      console.log("Usuário excluído com sucesso")
    })
  }

  return (
    <View style={styles.containerBiblio}>
      <LinearGradient // Background Linear Gradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={colors}
        locations={locations}
        style={{ height: 7, width: "100%", }}
      />

      <Button style={styles.buttonCL} onPress={() =>
        navigation.navigate("CadModal")
      }>
        <Text style={styles.textBL}>+ Criar novo Livro</Text>
      </Button>

      {
        Array.isArray(livros) && livros.map((livro) => (
          <View key={livro.id}>

            <View
              style={{
                flex: "1",
                flexWrap: "wrap",
                display: "flex",
                gap: "40px",
                marginLeft: "30px",
                flexDirection: "row",
                marginTop: "50px",
              }}
            >
              <View>
                <Text>{livro.id}</Text>
                {/* <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Inicial", { bookId: livro.id }, { UserId: user.uid })
                  }
                > */}
                <Image
                  source={{ uri: livro.capaLivro }}
                  style={styles.LivroB}
                />
                {/* </TouchableOpacity> */}
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginLeft: "30px",
                    marginTop: "10px",
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: "18px",
                      marginLeft: "5px",
                      textAlign: "auto",
                    }}
                  >
                    {livro.nomeLivro}
                  </Text>
                  <Image
                    style={{
                      width: "20px",
                      height: "20px",
                      marginLeft: "20px",
                      position: "relative",
                    }}
                    source={require("../Images/Vector.png")}
                  />
                </View>
              </View>
            </View>
            <View>
              <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-start" }}>
                <Button onPress={() =>
                  navigation.navigate("Atualizar Livros", { bookId: livro.id, UserId: user.uid })
                }>Editar</Button>
                <Button onPress={() => handleExcluir(livro)}>Excluir Livro</Button>
                <Button onPress={() => navigation.navigate("Mundo", { bookId: livro.id, UserId: user.uid })}>Criar Mundo</Button>
                <Button onPress={() => navigation.navigate("ListMundo", { bookId: livro.id, UserId: user.uid })}>Lista de Mundos</Button>
              </View>
            </View>
          </View>

        ))}

      <LinearGradient // Background Linear Gradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={colors}
        locations={locations}
        style={{ height: 7, width: "100%", marginTop: "135%" }}
      />
    </View>
  );
};
