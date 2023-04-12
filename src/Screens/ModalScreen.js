import * as React from "react";
import { View, ImageBackground, TouchableOpacity } from "react-native";
import { Text, Button, TextInput } from "react-native-paper";
import { addDoc, collection } from "firebase/firestore";
import { LinearGradient } from "expo-linear-gradient";
import { database } from "../Configuracoes/firebase";
import ImagePicker from "./ImagePicker";
import { useState } from "react";
import { colors, locations, styles } from "../Configuracoes/styles";

const ModalCadLivros = ({ navigation }) => {
  const userId = "QtBISAQHWGQPp80rMGaBi9CV8JN2";
  const [visible, setVisible] = useState(false);
  const [nomeLivro, setNomeLivro] = useState("");
  const [descricao, setDescricao] = useState("");
  const [capaLivro, setCapaLivro] = useState("");

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  console.log(userId);
  const handleAdd = async () => {
    try {
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
        userId: userId,
      });

      console.log("Livro adicionado com ID: ", docRef.id);
      setNomeLivro("");
      setDescricao("");
      setCapaLivro("");
      navigation.navigate("Biblioteca Modal", { UserId: user.uid });
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
        style={{ height: 7, width: "100%" }}
      />

      <View
        style={{
          backgroundColor: "white",
          height: 380,
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
                marginBottom: 15,
                marginTop: 15,
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
                    <ImagePicker
                      onImgURLChange={handleImgURLChange}
                    ></ImagePicker>
                  </ImageBackground>
                </TouchableOpacity>
              ) : (
                <ImageBackground
                  source={require("../Images/CriarLivros.png")}
                  style={{ width: "130px", height: "180px" }}
                >
                  <ImagePicker
                    onImgURLChange={handleImgURLChange}
                  ></ImagePicker>
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
            mode="outlined"
            underlineColor="#F4CCC8"
            outlineColor="#F4CCC8"
            activeOutlineColor="#A5A5A5"
            style={{
              width: "180px",
              height: 30,
              backgroundColor: "#F4CCC8",

              borderColor: "#F4CCC8",
              borderTopRightRadius: 0,
              borderTopLeftRadius: 0,
              margin: "auto",
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
