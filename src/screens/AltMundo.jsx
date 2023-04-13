import React, { useState, useEffect } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { addDoc, collection, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore";
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
    const [bookId, setBookId] = useState("");
    const [mundoId, setMundoId] = useState("");

    const handleChange = (event, editor) => {
        setDescricao(editor?.getData());
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
        console.log(route.params);
        setBookId(route.params.bookId);
        setMundoId(route.params.mundoId);
        const fetchMundo = async () => {

            // query inside collection mundo where the bookId is equal to the bookId passed in the route
            // fill the variable setNomeMundo with response.nomeMundo and setDescticao with response.descricao

            console.log("Mundo certo", mundoId);
            console.log("Vou buscar por ", bookId);
            const querySnapshot = await getDocs(query(collection(database, "mundo"), where("bookId", "==", bookId)));
            const response = querySnapshot.docs.map(
                (doc) => {
                    console.log(doc);
                    doc.data()

                    if (doc.id === mundoId) {
                        setNomeMundo(doc.data().nomeMundo);
                        setDescricao(doc.data().descricao);
                        console.log("Mundo certo", doc.id);
                        console.log("Mundo certo", doc.data());
                    } else {
                        console.log("Não é esse mundo", doc.id);
                    }


                }
            );


        }
        fetchMundo();

        return () => {
            if (route.params.bookId !== bookId) {
                setBookId(route.params.bookId);
            }
        }
        //
    }, [route.params.bookId]);

    useEffect(() => {

    }, [bookId])

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
