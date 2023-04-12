import * as React from "react";
import { View, Image, ImageBackground, TouchableOpacity } from "react-native";
import { Text, Button, TextInput } from "react-native-paper";
import { addDoc, collection } from "firebase/firestore";
import { LinearGradient } from "expo-linear-gradient";
import { auth, database } from "../config/firebase/firebase";
import ImagePicker from "../screens/ImagePicker";
import { colors, locations, styles } from "../config/styles";

const ModalCadLivros = ({ navigation }) => {
  const [nomeLivro, setNomeLivro] = React.useState("");
  const [descricao, setDescricao] = React.useState("");
  const [capaLivro, setCapaLivro] = React.useState("");

  const handleAdd = async () => {
    try {
      const user = auth.currentUser;
      if (!user) {
        throw new Error("Usuário não autenticado.");
      } else { console.log(user.uid) }

      if (!nomeLivro.trim()) {
        throw new Error("Por favor, insira um nome para o livro.");
      }

      if (!capaLivro) {
        throw new Error("Por favor, selecione uma capa para o livro.");
      }

      const docRef = await addDoc(collection(database, "livros"), {
        nomeLivro: nomeLivro,
        descricao: descricao,
        capaLivro: capaLivro,
        userId: user.uid,
      });

      console.log("Livro adicionado com ID: ", docRef.id);
      setNomeLivro("");
      setDescricao("");
      setCapaLivro("");
      navigation.navigate("Biblioteca Modal", { UserId: user.uid })
    } catch (error) {
      console.error("Erro ao adicionar livro: ", error.message);
    }
  };

  const handleImgURLChange = (url) => {
    setCapaLivro(url);
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
              Criar Livros
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <View>
              {capaLivro ? (
                <TouchableOpacity onPress={setCapaLivro}>
                  <ImageBackground
                    style={{ width: "130px", height: "180px" }}
                    source={{ uri: capaLivro }}
                  >
                    <ImagePicker onImgURLChange={handleImgURLChange}></ImagePicker>
                  </ImageBackground>
                </TouchableOpacity>
              ) : (
                <ImageBackground
                  source={require("../Images/CriarLivros.png")}
                  style={{ width: "130px", height: "180px" }}
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
            onPress={handleAdd}
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

export default ModalCadLivros;