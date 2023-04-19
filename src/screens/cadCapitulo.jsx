import React, { useEffect, useState } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { colors, locations, styles } from "../config/styles";
import { Appbar, Button, Paragraph, TextInput } from "react-native-paper";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import { database } from "../config/firebase";

export default function CapitulosCKScreen() {
  const _goBack = () => console.log("Went back");
  const _handleMore = () => console.log("Shown more");
  const [nomeCapitulos, setNomeCapitulos] = useState('');
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
      const docRef = await addDoc(collection(database, "capitulos"), {
        nomeCapitulos: nomeCapitulos,
        descricao: descricao,
        bookId: bookId, // add bookId to the document object
      });

      console.log("capítulo adicionado com ID: ", docRef.id);


    } catch (error) {
      console.error("Erro ao adicionar capítulo: ", error.message);
    }
  };

  
  useEffect(() => {
    const handleBeforeUnload = () => {
      setBookId("");
    };
    //fetch previous content "etapas" from Firestore using doc method
    const fetchPreviousContent = async () => {
      try {
        const docRef = doc(database, "capitulos", "erTGFbnvj2f2cp2eBXUT"); // pass document ID
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setDescricao(docSnap.data().descricao); // set previous content to state
        }
      } catch (error) {
        console.error("Erro ao buscar conteúdo anterior: ", error.message);
      }
    };

    fetchPreviousContent(); // call fetchPreviousContent on mount

    // reset nomeCapitulos and descricao when bookId changes
    setNomeCapitulos("");
    setDescricao("");

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [bookId]);
  
  return (
    <SafeAreaProvider style={styles.containercriacaoper}>
      <Appbar.Header style={styles.navConfig}>
        <Appbar.BackAction onPress={_goBack} />
        <Appbar.Content titleStyle={{ textAlign: "center", fontWeight: "bold", fontSize: "20px" }} title="Capítulos" />
        <Appbar.Action icon="menu" onPress={_handleMore} />
      </Appbar.Header>
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
      <div style={{ maxWidth: "300px", margin: "0 auto", }}>
        <CKEditor
          editor={ClassicEditor}
          onChange={(e, editor) => { handleChange(e, editor) }} />
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
      </div>
      <View>
        <LinearGradient
        // Background Linear Gradient 
          start={{ x: 0, y: 0 }} 
          end={{ x: 1, y: 0 }} 
          colors={colors} 
          locations={locations} 
          style={{ height: 7, width: "100%", marginTop:"438px" }} 
          />
      </View>



    </SafeAreaProvider>
  );
}
