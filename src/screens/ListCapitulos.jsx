import { LinearGradient } from "expo-linear-gradient";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Button, Paragraph } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { colors, locations, styles } from "../config/styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import * as React from "react";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore"
import { auth, database } from "../config/firebase/firebase";
import { useState, useEffect } from "react";


export default function listCapitulos({ route, navigation }) {
  const [bookId, setBookId] = useState(route.params.bookId);
  const [userId, setUserId] = useState('');
  const [capitulos, setCapitulos] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(database, 'capitulos'),
      querySnapshot => {
        const capitulosTemp = [];
        querySnapshot.forEach(doc => {
          const data = doc.data();
          if (data.bookId === bookId) {
            capitulosTemp.push({
              ...data,
              id: doc.id,
            });
          }
        });
        setCapitulos(capitulosTemp);
      }
    );
    return () => unsubscribe();
  }, [bookId]);

  function handleExcluir(capitulos) {
    // deleteDoc é responsável pela exclusão do dado em uma coleção "Tabela"
    deleteDoc(
      doc(database, "capitulos", capitulos.id)
    ).then(() => {
      console.log("capítulo excluído com sucesso")
    })
  }

  return (
    <SafeAreaProvider style={styles.containerBiblio}>
      <View>
        <LinearGradient
          // Background Linear Gradient 
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={colors}
          locations={locations}
          style={{ height: 7, width: "100%" }}
        />
      </View>
      <View>
        <Paragraph style={styles.capitulosparagraph}>Capítulos</Paragraph>
        {
          Array.isArray(capitulos) && capitulos.map((capitulos) => (
            <View key={capitulos.id}>
              <View style={styles.buttoncapitulos}>
                <View style={styles.viewcapitulos}>
                  <View>
                    <Text style={styles.capitulosub}>
                      Capítulo:
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Alterar capítulo', { bookId: bookId, userId: userId, capId: capitulos.id })}>
                      <Text style={styles.capitulostext}>
                        {capitulos.nomeCapitulos}
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View>
                    <TouchableOpacity onPress={() => handleExcluir(capitulos)}>
                      <Image style={styles.imagelixeira}
                        source={{ uri: require("../Images/lixeira.png") }} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>

          ))}
        <View style={{ marginTop: 40 }}>
        </View>
        <View>
          <Button style={styles.buttonadicionar} onPress={() => navigation.navigate('Criação de Capítulo', { bookId: bookId, userId: userId })}>
            <View style={styles.containerplustext}>
              <Icon name="plus" style={styles.iconplus}
              />
              <Text style={styles.textadicionar}>Adicionar novo capítulo</Text>

            </View>
          </Button>
        </View>
      </View>
      <View>
        <LinearGradient
          // Background Linear Gradient 
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={colors}
          locations={locations}
          style={{ height: 7, width: "100%", marginTop: "475px" }}
        />
      </View>

    </SafeAreaProvider>
  );
}