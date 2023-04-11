import * as React from "react";
import { View, Image, ImageBackground, TouchableOpacity } from "react-native";
import { Modal, Portal, Text, Button, Provider, TextInput } from "react-native-paper";
import { addDoc, collection, ref, uploadString } from "firebase/firestore";
import { auth, database, storage } from "../config/firebase/firebase";
import ImagePicker from "../screens/ImagePicker";

const ModalCadLivros = ({ navigation }) => {
  const [visible, setVisible] = React.useState(false);
  const [nomeLivro, setNomeLivro] = React.useState("");
  const [descricao, setDescricao] = React.useState("");
  const [capaLivro, setCapaLivro] = React.useState("");

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const handleAdd = async () => {
    try {
      const user = auth.currentUser;
      if (!user) {
        throw new Error("Usuário não autenticado.");
      }

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
    <Provider>
      <Portal>
        <Modal
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 0,
          }}
          visible={visible}
          onDismiss={hideModal}
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
                  style={{ height: "15px", width: "15px" }}
                />
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: "center" }}>
              <View>
                {capaLivro ? (
                  <TouchableOpacity onPress={setCapaLivro}>
                    <Image
                      style={{ width: "130px", height: "180px" }}
                      source={{ uri: capaLivro }}
                    />
                  </TouchableOpacity>
                ) : (
                  <ImageBackground
                    source={require("../Images/CriarLivros.png")}
                    style={{ width: "130px", height: "180px" }}
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
      </Portal>

      <Button style={{ marginTop: 30 }} onPress={showModal}>
      </Button>
    </Provider>
  );
};
export default ModalCadLivros;


