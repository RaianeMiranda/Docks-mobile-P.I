import React, { useState, useEffect } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { colors, locations, styles } from "../config/styles";
import { Button, Paragraph, Text, TextInput } from "react-native-paper";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import 'firebase/firestore';
import { database, auth } from "../config/firebase/firebase";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Modal } from "react-native";

export default function AltEtapasSnow({ route, navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [nomeEtapas, setNomeEtapas] = useState('');
    const [descricao, setDescricao] = useState('');
    const [bookId, setBookId] = useState(route.params.bookId);
    const [etapasId, setEtapasId] = useState('');

    const handleChange = (event, editor) => {
        setDescricao(editor?.getData());
    };

    useEffect(() => {
        const fetchPreviousContent = async () => {
            try {
                const docRef = doc(database, "etapas", route.params.etapasId);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setNomeEtapas(docSnap.data().nomeEtapas);
                    setDescricao(docSnap.data().descricao);
                }
            } catch (error) {
                console.error("Erro ao buscar conteúdo anterior: ", error.message);
            }
        };

        fetchPreviousContent();
    }, [route.params.etapasId]);

    const handleUpdate = async () => {
        try {
            console.log(route);
            const docRef = doc(database, "etapas", route.params.etapasId);

            await updateDoc(docRef, {
                nomeEtapas: nomeEtapas,
                descricao: descricao,
            });
            navigation.navigate("Página Inicial", { bookId: bookId, etapasId: etapasId });
            console.log("etapas atualizado com ID: ", route.params.etapasId);
        } catch (error) {
            console.error("Erro ao atualizar etapas: ", error.message);
        }
    }

    return (
        <View style={styles.containerBiblio}>


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
                    <Paragraph style={styles.paragraphper}>{nomeEtapas}
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

            <View
                style={{
                    height: 7,
                    backgroundColor: '#F4CCC8',
                    marginBottom: 10 //opcional
                }}
            />

            <View style={{ maxWidth: "360px", margin: " auto" }}>
                <CKEditor style={{ minHeight: 200 }}
                    editor={ClassicEditor}
                    data={descricao} // set data from Firestore to the editor
                    onChange={handleChange} />
            </View>
            <View style={styles.containersalvarEtapa}>
                <Button style={styles.buttonSalvarEtapa} mode="contained"
                    onPress={handleUpdate}>
                    <Text style={{ color: "black" }}>Salvar</Text>
                </Button>

            </View>

            <View>
                <LinearGradient
                    // Background Linear Gradient 
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={colors}
                    locations={locations}
                    style={{ height: 7, width: "100%", marginTop: "370px", }}
                />
            </View>

        </View>
    );
}
