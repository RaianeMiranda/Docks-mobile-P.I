import React, { useState, useEffect } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { colors, locations, styles } from "../config/styles";
import { Button, Paragraph, Text, TextInput, Alert } from "react-native-paper";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import 'firebase/firestore';
import { database, auth } from "../config/firebase/firebase";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Modal } from "react-native";

export default function AltMundo({ route }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [nomeMundo, setNomeMundo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [bookId, setBookId] = useState(route.params.bookId);
    const [mundoId, setMundoId] = useState(route.params.mundoId);

    const handleChange = (event, editor) => {
        setDescricao(editor.getData());
    };

    function handleUpdate() {
        updateDoc(doc(database, "mundo", mundoId), {
            nomeMundo: nomeMundo,
            descricao: descricao,
        })
            .then(() => {
                console.log("Mundo atualizado com sucesso");
            })
            .catch((error) => {
                console.error("Erro ao atualizar mundo: ", error);
            });
    }

    useEffect(() => {
        const fetchMundo = async () => {
            const docRef = doc(database, "mundo", mundoId);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const data = docSnap.data();
                setNomeMundo(data.nomeMundo);
                setDescricao(data.descricao);
            }
        };
        fetchMundo();

        //reset the bookId state when the user navigates away from the screen
        const handleBeforeUnload = () => {
            setBookId("");
        };
        window.addEventListener("beforeunload", handleBeforeUnload);
        if (route.params.bookId !== bookId) {
            setBookId(route.params.bookId);
        }
    }, [route.params.bookId, mundoId]);


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
                            Nome do Mundo:
                            <TextInput
                                style={styles.inputper}
                                value={nomeMundo}
                                onChangeText={(text) => setNomeMundo(text)}
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
