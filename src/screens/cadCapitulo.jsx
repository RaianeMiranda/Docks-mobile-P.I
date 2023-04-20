import React, { useEffect, useState } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { colors, locations, styles } from "../config/styles";
import { Appbar, Button, Paragraph, TextInput } from "react-native-paper";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import { database } from "../config/firebase/firebase";

export default function cadCapitulos({ route, navigation }) {
  const _goBack = () => console.log("Went back");
  const _handleMore = () => console.log("Shown more");
  const [nomeCapitulos, setNomeCapitulos] = useState('');
  const [descricao, setDescricao] = useState('');
  const [bookId, setBookId] = useState(route.params.bookId);
  const [userId, setUserId] = useState('');


  useEffect(() => {
    console.log(bookId)
  }, [])

  const handleChange = (event, editor) => {
    setDescricao(editor.getData());
  }

  const handleSalvar = async () => {
    try {
      const docRef = await addDoc(collection(database, "capitulos"), {
        nomeCapitulos: nomeCapitulos,
        descricao: descricao,
        bookId: bookId, // add bookId to the document object
      });
      navigation.navigate("listCap", { bookId: bookId });
      console.log("capítulo adicionado com ID: ", docRef.id);


    } catch (error) {
      console.error("Erro ao adicionar capítulo: ", error.message);
    }
  };


  useEffect(() => {
    const handleBeforeUnload = () => {
      setBookId("");
    };

    // reset nomeCapitulos and descricao when bookId changes
    setNomeCapitulos("");
    setDescricao("");
  }, [bookId]);

  return (
    <SafeAreaProvider style={styles.containercriacaoper}>
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


      <View style={styles.containernomeper}>
        <Paragraph style={styles.paragraphper}>Nome do Capítulo:
          <TextInput style={styles.inputper}
            value={nomeCapitulos}
            onChangeText={text => setNomeCapitulos(text)}
          />
        </Paragraph>
      </View>
      <View
        style={{
          height: 7,
          backgroundColor: '#F1C4A5',
          marginBottom: 10 //opcional
        }}
      />
      <View style={{ maxWidth: "300px", margin: "0 auto", }}>
        <CKEditor
           editor={ClassicEditor}
           data={descricao} // set data from Firestore to the editor
           onChange={handleChange}/>
        <View>
          <View style={styles.containersalvarper}>

            <Button style={styles.buttondeletar} mode="contained">
              Deletar
            </Button>
            <Button style={styles.buttonsalvar} mode="contained" onPress={handleSalvar}>
              Salvar
            </Button>

          </View>
        </View>
      </View>
      <View>
        <LinearGradient
          // Background Linear Gradient 
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={colors}
          locations={locations}
          style={{ height: 7, width: "100%", marginTop: "438px" }}
        />
      </View>



    </SafeAreaProvider>
  );
}
