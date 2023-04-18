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

      <Button
        style={styles.buttonCL}
        onPress={() => navigation.navigate("CadModal")}
      >
        <Text style={styles.textBL}>+ Criar novo Livro</Text>
      </Button>

      {Array.isArray(livros) &&
        livros.map((livro) => (
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
                <Text>{livro.id}</Text>
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

                  <View>
                    <Menu
                      visible={visible}
                      onDismiss={closeMenu}
                      anchor={
                        <Button onPress={openMenu}>
                          <Image
                            style={styles.image3p}
                            source={require("../Images/Vector.png")}
                          />
                        </Button>
                      }
                      contentStyle={{
                        paddingVertical: 0,
                      }}
                    >
                      <TouchableOpacity
                        style={styles.item1menu}
                        onPress={() => console.log("Item 1")}
                      >
                        <Menu.Item>
                          <Text style={styles.titulomenuB}>Editar livro</Text>
                        </Menu.Item>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.item2menu}
                        onPress={() => console.log("Item 2")}
                      >
                        <Menu.Item>
                          <Text style={styles.titulomenuB}>Excluir livro</Text>
                        </Menu.Item>
                      </TouchableOpacity>
                    </Menu>
                  </View>
                </View>
              </View>
            </View>
          </View>
        ))}

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
