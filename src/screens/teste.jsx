import React, { useState } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { colors, locations, styles } from "../config/styles";
import { Appbar, Button, Paragraph, Text, TextInput } from "react-native-paper";
import { Alert, Modal, View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { addDoc, collection, ref, uploadString } from "firebase/firestore";
import { auth, database, storage } from "../config/firebase/firebase";
import ImagePicker from "../screens/ImagePicker";

export default function SnowflakeCK() {

    const [modalVisible, setModalVisible] = useState(false);
    const [nomeLivro, setNomeLivro] = React.useState("");
    const [descricao, setDescricao] = React.useState("");
    const [capaLivro, setCapaLivro] = React.useState("");

    const handleAdd = async () => {
        try {
            const user = auth.currentUser;
            if (!user) {
                throw new Error("Usuário não autenticado.");
            }

            if (!nomeLivro.trim()) {
                throw new Error("Por favor, insira um nome para o livro.");
            }

            if (!capaLivro) {
                throw new Error("Por favor, selecione uma capa para o livro.");
            }

            const docRef = await addDoc(collection(database, "livros"), {
                nomeLivro: nomeLivro,
                descricao: descricao,
                capaLivro: capaLivro,
                userId: user.uid,
            });

            console.log("Livro adicionado com ID: ", docRef.id);
            setNomeLivro("");
            setDescricao("");
            setCapaLivro("");
            hideModal();
        } catch (error) {
            console.error("Erro ao adicionar livro: ", error.message);
        }
    };
    const containerStyle = {
        backgroundColor: "white",
        height: 380,
        borderRadius: 25,
        width: 220,
    };

    const handleImgURLChange = (url) => {
        setCapaLivro(url);
    };


    const handleChange = (e, editor) => {
        setData(editor.getData());
    }
    return (
        <View style={styles.containermodal}>
            <View style={styles.containernomeper}>
                <Paragraph style={styles.paragraphper}>1.Resuma seu livro em uma frase:
                </Paragraph>
            </View>
            <View style={styles.centeredView}>
                <Modal

                    animationType="slide"
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


    );
}