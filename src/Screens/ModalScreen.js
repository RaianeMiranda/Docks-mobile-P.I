import * as React from "react";
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Modal,
} from "react-native";
import { Text, Button, TextInput } from "react-native-paper";
import { addDoc, collection } from "firebase/firestore";
import { database } from "../Configuracoes/firebase";
import ImagePicker from "./ImagePicker";
import { useState } from "react";

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
      hideModal();
    } catch (error) {
      console.error("Erro ao adicionar livro: ", error.message);
    }
  };

  const containerStyle = {
    backgroundColor: "white",
    height: 380,
    borderRadius: 25,
    width: 220,
  };

  const handleImgURLChange = (url) => {
    setCapaLivro(url);
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
     <Modal visible={visible} onDismiss={() => setVisible(false)}
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 0,
        }}
        contentContainerStyle={containerStyle}
      >
        <View>
          <View>
            <ImagePicker onImgURLChange={handleImgURLChange}></ImagePicker>
          </View>
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
            <TouchableOpacity onPress={hideModal}>
              <Image
                source={require("../Images/FecharModal.png")}
                style={{ height: 15, width: 15 }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: "center" }}>
            <View>
              {capaLivro ? (
                <TouchableOpacity onPress={setCapaLivro}>
                  <Image
                    style={{ width: 130, height: 180 }}
                    source={{ uri: capaLivro }}
                  />
                </TouchableOpacity>
              ) : (
                <ImageBackground
                  source={require("../Images/CriarLivros.png")}
                  style={{ width: 130, height: 180 }}
                />
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
      </Modal>
    </View>
  );
};

export default ModalCadLivros;
