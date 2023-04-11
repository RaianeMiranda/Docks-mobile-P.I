import React, { useState } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { addDoc, collection } from "firebase/firestore";
import { colors, locations, styles } from "../config/styles";
import { Button, Paragraph, TextInput } from "react-native-paper";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import 'firebase/firestore';
import { database, auth } from "../config/firebase/firebase";

export default function cadMundo({ route }) {
    const [nomeMundo, setNomeMundo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [bookId, setBookId] = useState(route.params.bookId);
    const handleChange = (event, editor) => {
        setDescricao(editor.getData());
    }
    const handleSalvar = async () => {
        try {
            const user = auth.currentUser;
            if (!user) {
                throw new Error("Usuário não autenticado.");
            }

            const docRef = await addDoc(collection(database, "mundo"), {
                nomeMundo: nomeMundo,
                descricao: descricao,
                bookId: bookId, // add bookId to the document object
            });
            console.log(bookId)
            
            console.log("Mundo adicionado com ID: ", docRef.id);
            setNomeMundo("");
            setDescricao("");
        } catch (error) {
            console.error("Erro ao adicionar mundo: ", error.message);
        }
    };
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
                <Paragraph style={styles.paragraphper}>
                    Nome do Mundo:
                    <TextInput
                        style={styles.inputper}
                        value={nomeMundo}
                        onChangeText={text => setNomeMundo(text)}
                    />
                </Paragraph>
            </View>
            <View
                style={{
                    height: 7,
                    backgroundColor: '#EBDEF0',
                    marginBottom: 10 //opcional
                }}
            />
            <View style={{ maxWidth: "300px", margin: "0 auto", }}>
                <CKEditor
                    editor={ClassicEditor}
                    onChange={handleChange}
                />
                <View style={styles.containersalvarper}>
                    <Button
                        style={{
                            backgroundColor: "#EBDEF0",
                            border: "3px solid #D9D9D9",
                            borderRadius: "1px",
                            height: "40px",
                            width: "70px",
                            fontSize: "13px",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                        mode="contained"
                        onPress={handleSalvar}
                    >
                        Salvar
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
                    style={{ height: 7, width: "100%", marginTop: "438px", }}
                />
            </View>

        </SafeAreaProvider>
    );
}
