import React, { useState, useEffect } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { colors, locations, styles } from "../config/styles";
import { Button, Paragraph, Text, TextInput } from "react-native-paper";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import 'firebase/firestore';
import { database, auth } from "../config/firebase/firebase";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Modal } from "react-native";

export default function Altpersonagens({ route, navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [nomePersona, setNomePersona] = useState('');
    const [descricao, setDescricao] = useState('');
    const [bookId, setBookId] = useState(route.params.bookId);
    const [personagensId, setpersonagensId] = useState('');

    const handleChange = (event, editor) => {
        setDescricao(editor?.getData());
    };

    useEffect(() => {
        const fetchPreviousContent = async () => {
            try {
                const docRef = doc(database, "personagens", route.params.personagensId);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setNomePersona(docSnap.data().nomePersona);
                    setDescricao(docSnap.data().descricao);
                }
            } catch (error) {
                console.error("Erro ao buscar conteúdo anterior: ", error.message);
            }
        };

        fetchPreviousContent();
    }, [route.params.personagensId]);

    const handleUpdate = async () => {
        try {
            console.log(route);
            const docRef = doc(database, "personagens", route.params.personagensId);

            await updateDoc(docRef, {
                nomePersona: nomePersona,
                descricao: descricao,
            });
            navigation.navigate("Página Inicial", {bookId: bookId, personagensId: personagensId });
            console.log("personagens atualizado com ID: ", route.params.personagensId);
        } catch (error) {
            console.error("Erro ao atualizar personagens: ", error.message);
        }
    }


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
                <View style={styles.containermodal}>
                    <View style={styles.containernomeper}>
                        <Paragraph style={styles.paragraphper}>
                            Nome do personagens:
                            <TextInput
                                style={styles.inputper}
                                value={nomePersona}
                                onChangeText={(text) => setNomePersona(text)}
                                editable={true}
                            />


                        </Paragraph>
                    </View>
                    <View style={styles.centeredView}>
                        <Modal
                            animationType="none"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                                console.log('Modal has been closed.');
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
                    backgroundColor: '#EBDEF0',
                    marginBottom: 10 //opcional
                }}
            />
            <View style={{ maxWidth: "300px", margin: "0 auto", }}>
                <CKEditor
                    editor={ClassicEditor}
                    data={descricao}
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
                        onPress={handleUpdate}
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