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
  const [bookContainerHeight, setBookContainerHeight] = useState(0);

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

      <Text style={styles.nomeUsuariobi}>Bem vindo(a)</Text>

      <Button
        style={styles.buttonCL}
        onPress={() => navigation.navigate("Cadastro de Livro")}
      >
        <Text style={styles.textBL}>+ Criar novo Livro</Text>
      </Button>
      <View
        style={styles.containerLivros}
        onLayout={(event) =>
          setBookContainerHeight(event.nativeEvent.layout.height)
        } // add this line
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
                  
                    <Text style={styles.nomeLivro}>{livro.nomeLivro}</Text>

               
                </View>
              </View>
            </View>
          ))}
      </View>
      <LinearGradient
        // Background Linear Gradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={colors}
        locations={locations}
        style={{
          height: 7,
          width: "100%",
         
        }}
      />
    </View>
  );
  3;
};
