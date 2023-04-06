import * as React from "react";
import { View, Image, ImageBackground, TouchableOpacity } from "react-native";
import {
  Modal,
  Text,
  Provider,
  Portal,
  Button,
  TextInput,
} from "react-native-paper";
import { colors, locations, styles } from "../Configuracoes/styles";
import { LinearGradient } from "expo-linear-gradient";

export const BiblioScreen = ({ navigation }) => {
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
    <View style={styles.containerBiblio}>
    <LinearGradient // Background Linear Gradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={colors}
        locations={locations}
        style={{ height: 7, width: "100%", }}
      />
      
      
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
                <TouchableOpacity onPress={hideModal}>
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
       
        <Button style={styles.buttonCL} onPress={showModal}>
          <Text style={styles.textBL}>+ Criar novo Livro</Text>
        </Button>
     

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
          <Image
            source={require("../Images/Livro1.png")}
            style={styles.LivroB}
          />
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
              Livro1
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
        <View>
          <Image
            source={require("../Images/Livro2.png")}
            style={styles.LivroB}
          />
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
              Livro2
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
        <View>
          <Image
            source={require("../Images/Livro3.png")}
            style={styles.LivroB}
          />
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
              Livro3
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

      <LinearGradient // Background Linear Gradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={colors}
        locations={locations}
        style={{ height: 7, width: "100%", marginTop: "135%" }}
      />
       </Provider>
    </View>
  );
};
