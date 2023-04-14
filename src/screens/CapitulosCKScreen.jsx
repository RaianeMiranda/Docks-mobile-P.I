import React, { useState } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { colors, locations, styles } from "../config/styles";
import { Appbar, Button, Paragraph, TextInput } from "react-native-paper";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function CapitulosCKScreen() {
  const _goBack = () => console.log("Went back");
  const _handleMore = () => console.log("Shown more");
  const [data, setData] = useState('');
  const handleChange = (e, editor) => {
    setData(editor.getData());
  }
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
        <Paragraph style={styles.paragraphper}>Nome do Capítulo:<TextInput style={styles.inputper}></TextInput></Paragraph>
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
            <Button style={{
              backgroundColor: "#F1C4A5", border: "3px solid #D9D9D9", borderRadius: "1px", height: "40px", width: "70px", fontSize: "13px", display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }} mode="contained" onPress={() => navigation.navigate("LoginScreen")}>
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
