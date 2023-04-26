import React, { useEffect, useState } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { colors, locations, styles } from "../config/styles";
import { Appbar, Button, Paragraph, TextInput } from "react-native-paper";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { database } from "../config/firebase/firebase";

export default function altCapitulos({route, navigation}) {
    const _goBack = () => console.log("Went back");
    const _handleMore = () => console.log("Shown more");
    const [nomeCapitulos, setNomeCapitulos] = useState('');
    const [descricao, setDescricao] = useState('');
    const [bookId, setBookId] = useState(route.params.bookId);
    const [capId, setCapId] = useState('');

    const handleChange = (event, editor) => {
        setDescricao(editor?.getData());
    };

    useEffect(() => {
        const fetchPreviousContent = async () => {
            try {
                const docRef = doc(database, "capitulos", route.params.capId);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setNomeCapitulos(docSnap.data().nomeCapitulos);
                    setDescricao(docSnap.data().descricao);
                }
            } catch (error) {
                console.error("Erro ao buscar conteúdo anterior: ", error.message);
            }
        };

        fetchPreviousContent();
    }, [route.params.capId]);

    const handleUpdate = async () => {
        try {
            console.log(route);
            const docRef = doc(database, "capitulos", route.params.capId);

            await updateDoc(docRef, {
                nomeCapitulos: nomeCapitulos,
                descricao: descricao,
            });
            navigation.navigate("listCap", { bookId: bookId, capId: capId });
            console.log("capitulos atualizado com ID: ", route.params.capId);
        } catch (error) {
            console.error("Erro ao atualizar capitulos: ", error.message);
        }
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


            <View style={styles.containernomeper}>
                <Paragraph style={styles.paragraphper}>Nome do Capítulo:
                    <TextInput style={styles.inputper}
                        value={nomeCapitulos}
                        onChangeText={(text) => setNomeCapitulos(text)}
                        editable={true}
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
                   data={descricao}
                   onChange={handleChange} />
                <View>
                    <View style={styles.containersalvarper}>
                        <Button style={styles.buttondeletar} mode="contained">
                            Deletar
                        </Button>
                        <Button style={styles.buttonsalvar} mode="contained" onPress={handleUpdate}>
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
