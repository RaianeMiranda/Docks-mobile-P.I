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
                <View>
                    <Modal
                        animationType="none"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                            setModalVisible(!modalVisible);
                        }}>
                        <View>
                            <View style={{
                                margin: "auto",
                                backgroundColor: 'white',
                                borderRadius: 20,
                                padding: 15,
                                alignItems: 'center',
                            }}>
                                <Icon name="close"
                                    style={{
                                        fontSize: "24px",
                                        marginLeft: "auto",
                                    }}
                                    onPress={() => setModalVisible(!modalVisible)}
                                />

                                <View>
                                    <View
                                        style={{
                                            flex: 1,
                                            flexDirection: "row",
                                            justifyContent: "space-around",
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontWeight: "bold",
                                                fontSize: 25,
                                                marginBottom: 10,
                                            }}
                                        >
                                            Criar Livros
                                        </Text>
                                    </View>
                                    <View style={{ alignItems: "center" }}>
                                        <View>
                                            {capaLivro ? (
                                                <TouchableOpacity onPress={setCapaLivro}>
                                                    <ImageBackground
                                                        style={{ width: "130px", height: "180px" }}
                                                        source={{ uri: capaLivro }}
                                                    >
                                                        <ImagePicker onImgURLChange={handleImgURLChange}></ImagePicker>
                                                    </ImageBackground>
                                                </TouchableOpacity>
                                            ) : (
                                                <ImageBackground
                                                    source={require("../Images/CriarLivros.png")}
                                                    style={{ width: "130px", height: "180px" }}
                                                >
                                                    <ImagePicker onImgURLChange={handleImgURLChange}></ImagePicker>
                                                </ImageBackground>
                                            )}
                                        </View>
                                    </View>
                                    <Text
                                        style={{
                                            fontSize: "25px",
                                            marginTop: "20px",
                                            marginLeft: "20px",
                                        }}
                                    >
                                        Título
                                    </Text>
                                    <TextInput
                                        style={{
                                            width: "180px",
                                            height: "30px",
                                            backgroundColor: "#F4CCC8",
                                            borderWidth: 1,
                                            borderColor: "#D7C3C1",
                                            borderTopRightRadius: 0,
                                            borderTopLeftRadius: 0,
                                            marginLeft: "20px",
                                        }}
                                        label="Nome do livro"
                                        value={nomeLivro}
                                        onChangeText={setNomeLivro}
                                    />
                                    <Button
                                        style={{
                                            borderWidth: 3,
                                            borderColor: "#D9D9D9",
                                            backgroundColor: "#D5ECB6",
                                            width: "50px",
                                            borderRadius: 0,
                                            height: "30PX",
                                            marginTop: "15px",
                                            marginLeft: "135px",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                        onPress={handleAdd}
                                    >
                                        <Text
                                            style={{
                                                fontWeight: "bold",
                                                fontSize: "15px",
                                            }}
                                        >
                                            Salvar
                                        </Text>
                                    </Button>
                                </View>
                            </View>
                        </View>
                    </Modal>


                    <Icon name="information-outline" style={{
                        fontSize: "24px",
                        marginLeft: "auto",
                        marginTop: "15px",
                    }}
                        onPress={() => setModalVisible(true)} />



                </View>


    );
}