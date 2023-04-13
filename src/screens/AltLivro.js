import * as React from "react";
import { View, Image, ImageBackground, TouchableOpacity } from "react-native";
import { Text, Button, TextInput } from "react-native-paper";
import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore"; // added getDoc and updateDoc
import { LinearGradient } from "expo-linear-gradient";
import { auth, database } from "../config/firebase/firebase";
import ImagePicker from "./ImagePicker";
import { colors, locations, styles } from "../config/styles";

const AltLivro = ({ navigation, route }) => { // route is passed as a prop
  const { bookID } = route.params; // get bookID from route

  const [nomeLivro, setNomeLivro] = React.useState("");
  const [descricao, setDescricao] = React.useState("");
  const [capaLivro, setCapaLivro] = React.useState("");

  React.useEffect(() => {
    const fetchBook = async () => {
      try {
        const bookDoc = await getDoc(doc(database, "livros", bookID)); // retrieve the book's data by its ID
        if (bookDoc.exists()) {
          const bookData = bookDoc.data();
          setNomeLivro(bookData.nomeLivro);
          setDescricao(bookData.descricao);
          setCapaLivro(bookData.capaLivro);
        } else {
          throw new Error("Livro não encontrado");
        }
      } catch (error) {
        console.error("Erro ao buscar o livro: ", error.message);
      }
    };
    fetchBook();
  }, [bookID]);

  const handleUpdate = async () => {
    try {
      const user = auth.currentUser;
      if (!user) {
        throw new Error("Usuário não autenticado.");
      }

      await updateDoc(doc(database, "livros", bookID), { // use the bookID to update the book's data
        nomeLivro: nomeLivro,
        descricao: descricao,
        capaLivro: capaLivro
      });
      console.log("Livro atualizado com sucesso");
    } catch (error) {
      console.error("Erro ao editar o livro: ", error.message);
    }
  };

  const handleImgURLChange = (url) => {
    setCapaLivro({uri: url});
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

      <View style={{
        backgroundColor: "white",
        height: 450,
        borderRadius: 25,
        width: 220,
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      }}>
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
                  source={require("../Images/CriarLivros.png")}
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
            label="Nome do livro"
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
        style={{ height: 7, width: "100%", marginTop: "135%" }}
      />
    </View>
  );
};

export default AltLivro;