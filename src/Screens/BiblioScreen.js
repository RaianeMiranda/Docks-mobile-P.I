import * as React from "react";
import { View, Image } from "react-native";
import {
  Modal,
  Text,
  Provider,
  Portal,
  Button,
  TextInput,
} from "react-native-paper";
import { collection, onSnapshot } from "firebase/firestore"
import { colors, locations, styles } from "../Configuracoes/styles";
import { LinearGradient } from "expo-linear-gradient";
import ModalCadLivros from "./ModalScreen";
import { database } from "../Configuracoes/firebase"; 

export const BiblioScreen = ({ navigation }) => {
  const [visible, setVisible] = React.useState(false);
  const [livros, setLivros] = React.useState([]);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  React.useEffect(() => {
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
          <ModalCadLivros></ModalCadLivros>
        </Portal>
        <Button style={styles.buttonCL} onPress={showModal}>
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
                  <Image source={{ uri: livro.capaLivro }} style={styles.LivroB} />
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
            </View>
          ))
        }



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
