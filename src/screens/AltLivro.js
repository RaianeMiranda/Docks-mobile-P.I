import * as React from "react";
import { View, Image, ImageBackground, TouchableOpacity } from "react-native";
import { Text, Button, TextInput } from "react-native-paper";
import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore"; // added getDoc and updateDoc
import { LinearGradient } from "expo-linear-gradient";
import { auth, database } from "../config/firebase/firebase";
import ImagePicker from "./ImagePicker";
import { colors, locations, styles } from "../config/styles";
import { useEffect } from "react";

const AltLivro = ({ navigation, route }) => { // route is passed as a prop
  const { bookId } = route.params; // get bookID from route
  const [nomeLivro, setNomeLivro] = React.useState("");
  const [capaLivro, setCapaLivro] = React.useState("");
  const user = auth.currentUser;
  if (!user) {
    throw new Error("Usuário não autenticado.");
  }

  const handleUpdate = async () => {
    try {
      console.log(route);
      const docRef = doc(database, "livros", route.params.bookId);

      await updateDoc(docRef, {
        nomeLivro: nomeLivro,
        capaLivro: capaLivro,
      });
      navigation.navigate("Biblioteca");
      console.log("livros atualizado com ID: ", route.params.bookId);
    } catch (error) {
      console.error("Erro ao atualizar livros: ", error.message);
    }
  }

  useEffect(() => {
    const fetchPreviousContent = async () => {
      try {
        const docRef = doc(database, "livros", route.params.bookId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setNomeLivro(docSnap.data().nomeLivro);
          setCapaLivro(docSnap.data().capaLivro);
        }
      } catch (error) {
        console.error("Erro ao buscar conteúdo anterior: ", error.message);
      }
    };

    fetchPreviousContent();
  }, [route.params.capId]);
  const handleImgURLChange = (url) => {
    setCapaLivro({ uri: url });
  };

  return (
    <View style={styles.containerBiblio}>
      <LinearGradient // Background Linear Gradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={colors}
        locations={locations}
        style={{ height: 7, width: "100%", }}
      />

      <View
        style={{
          backgroundColor: "white",
          height: 380,
          justifyContent: "center",
          borderRadius: 25,
          width: 220,
          margin: "auto",
          marginTop: "30px",
        }}
      >
        <View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 25,
                marginBottom: 10,
              }}
            >
              Editar Livro
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <View>
              {capaLivro ? (
                <TouchableOpacity onPress={() => setCapaLivro(null)}>
                  <ImageBackground
                    style={{ width: 130, height: 180 }}
                    source={{ uri: capaLivro }}
                  >
                    <ImagePicker onImgURLChange={handleImgURLChange}></ImagePicker>
                  </ImageBackground>
                </TouchableOpacity>
              ) : (
                <ImageBackground
                  source={{ uri: { capaLivro } }}
                  style={{ width: 130, height: 180 }}
                >
                  <ImagePicker onImgURLChange={handleImgURLChange}></ImagePicker>
                </ImageBackground>
              )}
            </View>
          </View>
          <Text
            style={{
              fontSize: "25px",
              marginTop: "20px",

              marginLeft: "20px",
            }}
          >
            Título
          </Text>
          <TextInput
            style={{
              width: "180px",
              height: "30px",
              backgroundColor: "#F4CCC8",
              borderWidth: 1,
              borderColor: "#D7C3C1",
              borderTopRightRadius: 0,
              borderTopLeftRadius: 0,
              marginLeft: "20px",
            }}
            label="Nome do Livro"
            value={nomeLivro}
            onChangeText={setNomeLivro}
          />
          <Button
            style={{
              borderWidth: 3,
              borderColor: "#D9D9D9",
              backgroundColor: "#D5ECB6",

              width: "50px",
              borderRadius: 0,
              height: "30PX",
              marginTop: "15px",
              marginLeft: "135px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={handleUpdate}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: "15px",
              }}
            >
              Salvar
            </Text>
          </Button>
        </View>
      </View>
      <LinearGradient // Background Linear Gradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={colors}
        locations={locations}
        style={{ height: 7, width: "100%", marginTop: 265 }}
      />
    </View>
  );
};

export default AltLivro;