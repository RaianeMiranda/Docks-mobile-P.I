import React, { useEffect, useState } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { colors, locations, styles } from "../config/styles";
import { Appbar, Button, Paragraph, TextInput } from "react-native-paper";
import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import { Alert, Modal, Text, View } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native-web";
import { database } from "../config/firebase";

export default function SnowflakeCK({ route }) {

  const [modalVisible, setModalVisible] = useState(false);
  const _goBack = () => console.log("Went back");
  const _handleMore = () => console.log("Shown more");
  const [nomeEtapas, setEtapas] = useState('');
  const [descricao, setDescricao] = useState('');
  const userId = "QtBISAQHWGQPp80rMGaBi9CV8JN2";
  const bookId = "HNlQEfr1VItwuVt9fBMC"

  useEffect(() => {

    console.log(bookId)
  }, [])

  const handleChange = (event, editor) => {
    setDescricao(editor.getData());
}

  const handleSalvar = async () => {
    try {
      const docRef = await addDoc(collection(database, "etapas"), {
        nomeEtapas: nomeEtapas,
        descricao: descricao,
        bookId: bookId, // add bookId to the document object
      });

      console.log("etapas adicionado com ID: ", docRef.id);


    } catch (error) {
      console.error("Erro ao adicionar etapas: ", error.message);
    }
  };

  
  useEffect(() => {
    const handleBeforeUnload = () => {
      setBookId("");
    };
    //fetch previous content "etapas" from Firestore using doc method
    const fetchPreviousContent = async () => {
      try {
        const docRef = doc(database, "etapas", "erTGFbnvj2f2cp2eBXUT"); // pass document ID
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setDescricao(docSnap.data().descricao); // set previous content to state
        }
      } catch (error) {
        console.error("Erro ao buscar conteúdo anterior: ", error.message);
      }
    };

    fetchPreviousContent(); // call fetchPreviousContent on mount

    // reset nomeEtapas and descricao when bookId changes
    setEtapas("");
    setDescricao("");

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [bookId]);

  return (
    <SafeAreaProvider style={styles.containercriacaoper}>
      <Appbar.Header style={styles.navConfig}>
        <Appbar.BackAction onPress={_goBack} />
        <Appbar.Content titleStyle={{ textAlign: "center", fontWeight: "bold", fontSize: "20px" }} title="Snowflake" />
        <Appbar.Action icon="menu" onPress={_handleMore} />
      </Appbar.Header>

      <View>
        <LinearGradient
          // Background Linear Gradient 
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={colors}
          locations={locations}
          style={{ height: 7, width: "100%", }}
        />
        <View>
        </View>
        <View style={styles.containermodal}>
          <View style={styles.containernomeper}>
            <Paragraph style={styles.paragraphper}>1.Resuma seu livro em uma frase:
            </Paragraph>
          </View>
          <View style={styles.centeredView}>
            <Modal

              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
              }}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Icon name="close"
                    style={styles.buttonclose}
                    onPress={() => setModalVisible(!modalVisible)}

                  />

                  <Text style={styles.modalText}>O primeiro passo é pequeno, mas não tão simples.
                    Você deve escrever uma frase que resuma toda a história do seu livro.
                    Recomendamos fazer uma frase com menos de 15 palavras que aborda as principais questões da estória sem citar nomes de personagens.
                  </Text>
                  <Text style={styles.modalText2}>
                    O resultado deve ficar mais ou menos assim:
                  </Text>
                  <Text style={styles.modalText3}>
                    “Um cientista excêntrico viaja no tempo para matar Hitler.”
                  </Text>
                  <Text>
                    Como você pode observar, descrevemos o protagonista em vez de citar seu nome.
                    Mencionar Hitler não tem problema, pois ele é uma figura histórica.
                    Não se preocupe em alcançar a perfeição. O objetivo de cada etapa é justamente desenvolver e aperfeiçoar o seu enredo aos poucos.
                  </Text>
                  <Text style={styles.modalText4}>
                    Aqui há outros exemplos para se inspirar:
                  </Text>
                  <Text style={styles.modalText5}>
                    “Garoto órfão descobre que é um bruxo famoso e é levado para uma escola de magia” (Harry Potter e a Pedra filosofal)
                  </Text>
                  <Text style={styles.modalText6}>
                    “Estudante adolescente descobre que o garoto que ela está interessada é um vampiro” (Crepúsculo)</Text>

                </View>
              </View>
            </Modal>


            <Icon name="information-outline" style={styles.iconinfo}
              onPress={() => setModalVisible(true)} />



          </View>
        </View>
      </View>
      <View
        style={{
          height: 7,
          backgroundColor: '#F4CCC8',
          marginBottom: 10 //opcional
        }}
      />

      <View style={{ maxWidth: "300px", margin: "0 auto", }}>
        <CKEditor
          editor={ClassicEditor}
          data={descricao} // set data from Firestore to the editor
          onChange={handleChange}/>
        <View style={styles.containersalvarper}>
          <Button style={{
            backgroundColor: "#F4CCC8", border: "3px solid #D9D9D9", borderRadius: "1px", height: "40px", width: "70px", fontSize: "13px", display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }} mode="contained"
            onPress={handleSalvar}>
            Salvar
          </Button>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("CapitulosScreen")}>
          <Text style={styles.logindocks}>Capítulos</Text>
        </TouchableOpacity>
      </View>
      <View>
        <LinearGradient
          // Background Linear Gradient 
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={colors}
          locations={locations}
          style={{ height: 7, width: "100%", marginTop: "448px", }}
        />
      </View>

    </SafeAreaProvider>
  );
}
