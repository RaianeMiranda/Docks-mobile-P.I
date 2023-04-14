import * as React from "react";
import { Image, View, TouchableOpacity } from 'react-native';
import { Text, Button } from "react-native-paper";
import { collection, onSnapshot } from "firebase/firestore";
import { colors, locations, styles } from "../Configuracoes/styles";
import { LinearGradient } from "expo-linear-gradient";
import { database } from "../Configuracoes/firebase";
import { useState } from "react";
import { useEffect } from "react";
import Popover from 'react-native-popover-view';

export const BiblioScreen = ({ navigation }) => {
  const [livros, setLivros] = useState([]);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

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
                  <View style={styles.container}>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={toggleMenu}
                    >
                      <Image
                        style={{
                          width: "20px",
                          height: "20px",
                          marginLeft: "20px",
                          position: "relative",
                        }}
                        source={require("../Images/Vector.png")}
                      />
                    </TouchableOpacity>
                    <Popover
                      isVisible={isMenuVisible}
                      onRequestClose={toggleMenu}
                      placement="bottom"
                    >
                      <TouchableOpacity
                        style={styles.menuItem}
                        onPress={() => console.log("Editar livro")}
                      >
                        <Text style={styles.menuItemText}>Editar livro</Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={styles.menuItem}
                        onPress={() => console.log("Excluir livro")}
                      >
                        <Text style={styles.menuItemText}>Excluir livro</Text>
                      </TouchableOpacity>
                    </Popover>
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
