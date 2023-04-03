import * as React from "react";
import { View, Image, ImageBackground } from "react-native";
import {
  Modal,
  Portal,
  Text,
  Button,
  Provider,
  TextInput,
} from "react-native-paper";

const MyComponent = () => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const [text, setText] = React.useState("");
  const containerStyle = {
    backgroundColor: "white",

    height: "400px",
    borderRadius: "50px",
    padding: "10px",
  };

  return (
    <Provider>
      <Portal>
        <Modal
          style={{ width: "250px", marginLeft: "60px" }}
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          <View style={{ margin: 0 }}>
            <View style={{ marginTop: "0" }}>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  marginBottom: "5px",
                }}
              >
                Criar Livros
              </Text>
            </View>
            <View style={{ marginLeft: "30px" }}>
              <ImageBackground
                source={require("../Images/CriarLivros.png")}
                style={{ width: "150px", height: "200px" }}
              >
                <Button>
                  <Image
                    style={{
                      width: "80px",
                      height: "100px",
                      marginTop: "30px",
                    }}
                    source={require("../Images/botaoModal.png")}
                  />
                </Button>
              </ImageBackground>
            </View>
            <Text
              style={{
                fontSize: "20px",
                marginBottom: "5px",
                marginTop: "10px",
              }}
            >
              Título
            </Text>
            <TextInput
              style={{
                width: "200px",
                height: "35px",
                backgroundColor: "#F4CCC8",
                border:"3px solid #D7C3C1"
              }}
              label="Nome do livro"
              value={text}
              onChangeText={(text) => setText(text)}
            />
            <Button
              style={{
                border: "3px solid #D9D9D9",
                backgroundColor: "#D5ECB6",
                width: "80px",
                borderRadius: "OPX",
                height: "30PX",
              marginTop:"10px",
              display:"flex",
              alignContent:""
              }}
            >
             <Text style={{ fontWeight: "bold",paddingBottom:"3px"}}>Salvar</Text> 
            </Button>
          </View>
        </Modal>
      </Portal>
      <Button style={{ marginTop: 30 }} onPress={showModal}>
        Show
      </Button>
    </Provider>
  );
};

export default MyComponent;
