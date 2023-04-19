import React, { useEffect, useState } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { colors, locations, styles } from "../config/styles";
import { Appbar, Button, Paragraph, TextInput } from "react-native-paper";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { database } from "../config/firebase";

export default function CapitulosCk2() {
    const _goBack = () => console.log("Went back");
    const _handleMore = () => console.log("Shown more");
    const [nomeCapitulos, setNomeCapitulos] = useState('');
    const [descricao, setDescricao] = useState('');
    const userId = "QtBISAQHWGQPp80rMGaBi9CV8JN2";
    const bookId = "HNlQEfr1VItwuVt9fBMC"
    const capId = "0RxTS1EN1U6D5rCKtRGb"

    const handleChange = (event, editor) => {
        setDescricao(editor?.getData());
    };

    useEffect(() => {
        const fetchPreviousContent = async () => {
            try {
                const docRef = doc(database, "capitulos", capId);
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
    }, [capId]);

    const handleSalvar = async () => {
        try {
            const docRef = doc(database, "capitulos", capId);

            await updateDoc(docRef, {
                nomeCapitulos: nomeCapitulos,
                descricao: descricao,
            });
            console.log("capitulos atualizado com ID: ", capId);
        } catch (error) {
            console.error("Erro ao atualizar capitulos: ", error.message);
        }
    };


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
                        onChangeText={(text) => setNomeCapitulos(text)}
                        editable={true}
                    >
                    </TextInput>
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
