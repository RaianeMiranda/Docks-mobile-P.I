import * as React from "react";
import { View, Image, ImageBackground, TouchableOpacity } from "react-native";

import {
  Modal,
  Portal,
  Text,
  Button,
  Provider,
  TextInput,
} from "react-native-paper";

const MyComponent = ({navigation}) => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const [text, setText] = React.useState("");

  const containerStyle = {
    backgroundColor: "white",
    height: "380px",
    borderRadius: "25px",
    width: "220px",
  };

  return (
    <Provider>
      <Portal>
        <Modal
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            marginTop: "0px",
          }}
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          <View>
            <View
              style={{
                flex: "1",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: "25px",
                  marginBottom: "10px",
                }}
              >
                Criar Livros
              </Text>
              <TouchableOpacity
                onPress={hideModal}
              >
              <Image
                source={require("../Images/FecharModal.png")}
                style={{ height: "15px", width: "15px" }}
                
              />
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: "center" }}>
              <ImageBackground
                source={require("../Images/CriarLivros.png")}
                style={{ width: "130px", height: "180px" }}
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
                border: " solid #D7C3C1",
                borderTopRightRadius: "0",
                borderTopLeftRadius: "0",
                marginLeft: "20px",
              }}
              label="Nome do livro"
              value={text}
              onChangeText={(text) => setText(text)}
            />
            <Button
              style={{
                border: "3px solid #D9D9D9",
                backgroundColor: "#D5ECB6",
                width: "50px",
                borderRadius: "Opx",
                height: "30PX",
                marginTop: "15px",
                marginLeft: "135px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
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
        Show
      </Button>
   </Provider>
  );
};
 export default MyComponent;


