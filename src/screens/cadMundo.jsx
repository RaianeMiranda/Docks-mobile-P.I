import React, { useState } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import { colors, locations, styles } from "../config/styles";
import { Button, Paragraph, Text, TextInput } from "react-native-paper";
import { Image, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import 'firebase/firestore';
import { database, auth } from "../config/firebase/firebase";
import { useEffect } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Modal } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

export default function cadMundo({ route, navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [nomeMundo, setNomeMundo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [bookId, setBookId] = useState(route.params.bookId);
    const handleChange = (event, editor) => {
        setDescricao(editor.getData());
    }
    console.log(bookId)
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
            navigation.navigate("Página Inicial", { bookId: bookId });
            console.log("Mundo adicionado com ID: ", docRef.id);


        } catch (error) {
            console.error("Erro ao adicionar mundo: ", error.message);
        }
    };

    useEffect(() => {
        if (route.params.bookId !== bookId) {
            setBookId(route.params.bookId);
        }

        // fetch previous content "Mundo" from Firestore using doc method
        const fetchPreviousContent = async () => {
            try {
                const docRef = doc(database, "mundo", "sFU8hOItb11B3dRRDs9i"); // pass document ID
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setDescricao(docSnap.data().descricao); // set previous content to state
                }
            } catch (error) {
                console.error("Erro ao buscar conteúdo anterior: ", error.message);
            }
        };

        fetchPreviousContent(); // call fetchPreviousContent on mount

        // reset nomeMundo and descricao when bookId changes
        setNomeMundo("");
        setDescricao("");

    }, [bookId, route.params.bookId]);

    return (
        <View style={styles.containerBiblio}>
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
                                onChangeText={text => setNomeMundo(text)}
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
                                <View style={{
                                    margin: "auto",
                                    backgroundColor: 'white',
                                    borderRadius: 20,
                                    padding: 15,
                                    alignItems: 'center',
                                    shadowColor: '#000',

                                }}>
                                    <Icon name="close"
                                        style={styles.buttonclose}
                                        onPress={() => setModalVisible(!modalVisible)}

                                    />

                                    <View style={{ display: "flex", alignItems: "center", flexDirection: "row", marginBottom: 15 }}>
                                        <Image
                                            source={require("../Images/placa.png")}
                                            style={{ minWidth: 120, minHeight: 120 }}
                                        />

                                        <View style={{ display: "flex", flexDirection: "column" }}>
                                            <Image
                                                source={require("../Images/construir.png")}
                                                style={{ minWidth: 90, minHeight: 145 }}
                                            />
                                        </View>
                                    </View>
                                    <View style={{ textAlign: 'center', fontSize: 18, fontWeight: "bold" }}>Estamos trabalhando em novos conteúdos!!</View>


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
                        backgroundColor: '#D5ECB6',
                        marginBottom: 10 //opcional
                    }}
                />
                <Image
                    source={require("../Images/construir.png")}
                />
                <View style={{ maxWidth: "360px", margin: " auto", }}>
                    <CKEditor
                        editor={ClassicEditor}
                        data={descricao} // set data from Firestore to the editor
                        onChange={handleChange}
                    />
                </View>
                <View style={styles.containerBiblio}>
                    <View style={styles.containersalvarEtapa}>
                        <TouchableOpacity
                            style={{
                                backgroundColor: "#D5ECB6",
                                border: "3px solid #D9D9D9",
                                borderRadius: "1px",
                                height: "40px",
                                width: "70px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                            mode="contained"
                            onPress={handleSalvar}
                        >
                            <Text style={{ fontSize: "13px", fontWeight: "bold", color: "black" }}>  Salvar  </Text>
                        </TouchableOpacity>
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
                    style={{ height: 7, width: "100%" }}
                />
            </View>
        </View>
    );
}
