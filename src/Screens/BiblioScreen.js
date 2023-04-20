import * as React from "react";
import { Image, View } from "react-native";
import { Text, Button, Menu } from "react-native-paper";
import { collection, onSnapshot } from "firebase/firestore";
import { colors, locations, styles } from "../Configuracoes/styles";
import { LinearGradient } from "expo-linear-gradient";
import { database } from "../Configuracoes/firebase";
import { useState } from "react";
import { useEffect } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

export const BiblioScreen = ({ navigation }) => {
  const [livros, setLivros] = useState([]);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(database, "livros"),
      (querySnapshot) => {
        const livroTemp = [];
        querySnapshot.forEach((doc) => {
          livroTemp.push({
            ...doc.data(),
            id: doc.id,
          });
        });
        setLivros(livroTemp);
      }
    );

    return () => unsubscribe();
  }, []);

  return (
    <View style={styles.containerBiblio}>
      <LinearGradient // Background Linear Gradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={colors}
        locations={locations}
        style={{ height: 7, width: "100%" }}
      />

<Text style={{fontSize:"22px", fontWeight:"bold", paddingLeft: 35,
          marginTop:"20px"}}>Bem vindo(a)</Text>

      <Button
        style={styles.buttonCL}
        onPress={() => navigation.navigate("CadModal")}
      >
        <Text style={styles.textBL}>+ Criar novo Livro</Text>
      </Button>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          marginTop: "20px",
          gap: 40,
          rowGap: 30,
          paddingLeft: 30,
        }}
      >
        {Array.isArray(livros) &&
          livros.map((livro) => (
            <View key={livro.id}>
              <View>
                {/* <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Mundo", { bookId: livro.id }, { UserId: user.uid })
                  }
                > */}
                <Image
                  source={{ uri: livro.capaLivro }}
                  style={styles.LivroB}
                />
                {/* </TouchableOpacity> */}
                <View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginTop:"20px",
                   
          
                    }}
                  >
                    <Text style={{ fontWeight: "bold", fontSize: "16px"  }}>
                      {livro.nomeLivro}
                    </Text>

                    <Menu
                      anchorPosition="bottom"
                      visible={visible}
                      onDismiss={closeMenu}
                      anchor={
                        <TouchableOpacity  onPress={openMenu}>
                          <Image
                            style={styles.image3p}
                            source={require("../Images/Vector.png")}
                          />
                        </TouchableOpacity>
                      }
                      contentStyle={{
                        paddingVertical: 0,
                      }}
                    >
                      <TouchableOpacity
                        style={styles.item1menu}
                        onPress={() => console.log("Item 1")}
                      >
                        <Menu.Item
                          title={
                            <Text
                              style={{
                                fontSize: "14px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                paddingBottom: "25px",
                                paddingRight: "100px",
                              }}
                            >
                              Editar livro
                            </Text>
                          }
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.item2menu}
                        onPress={() => console.log("Item 2")}
                      >
                        <Menu.Item
                          title={
                            <Text
                              style={{
                                fontSize: "14px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                paddingBottom: "25px",
                                paddingRight: "100px",
                              }}
                            >
                              Excluir livro
                            </Text>
                          }
                        />
                      </TouchableOpacity>
                    </Menu>
                  </View>
                </View>
              </View>
            </View>
          ))}
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
