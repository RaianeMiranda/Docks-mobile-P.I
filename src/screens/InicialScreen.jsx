import { LinearGradient } from 'expo-linear-gradient'
import React, { useEffect, useState } from 'react'
import { View, Text, Image } from "react-native"
import { Button, Paragraph } from 'react-native-paper'
import { CarouselCards2 } from '../cards/cardMundo'
import { CarouselCards1 } from '../cards/cardSnow'
import { colors, styles, locations } from '../config/styles'
import { CarouselCards3 } from '../cards/cardPersona'
import { auth, database } from '../config/firebase/firebase'
import { doc, deleteDoc } from "firebase/firestore";
import { TouchableOpacity } from 'react-native-gesture-handler'

export const PaginaInicial = ({ route, navigation }) => {
    const [bookId, setBookId] = useState('');
    const [nomeBook, setNomeBook] = useState('');
    const [userId, setUserId] = useState('');
    const user = auth.currentUser;

    if (!user) {
        throw new Error("Usuário não autenticado.");
    }
    function handleExcluir(bookId) {
        deleteDoc(
            doc(database, "livros", bookId)
        ).then(() => {
            navigation.navigate("Biblioteca")
            console.log("Livro excluído com sucesso")
        })
    }
    useEffect(() => {
        setBookId(route.params.bookId);
        setNomeBook(route.params.nomeBook);
        setUserId(user.uid);
    }, [route.params.bookId])

    const CarouselCardsContainer = (props) => (
        <View>
            <CarouselCards1 bookId={props.bookId} userId={props.userId} navigation={navigation} />
            <CarouselCards2 bookId={props.bookId} userId={props.userId} navigation={navigation} />
            <CarouselCards3 bookId={props.bookId} userId={props.userId} navigation={navigation} />
        </View>
    );

    return (
        <View style={styles.containerBiblio}>
            <View style={{ flex: 1 }}>
                <View style={{ flexBasis: 7 }}>
                    <LinearGradient
                        // Background Linear Gradient 
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={colors}
                        locations={locations}
                        style={{ height: 7, width: "100%" }}
                    />
                </View>
                <View style={styles.containerBiblio}>
                    <View style={{ flexBasis: "100%" }}>
                        <Paragraph style={styles.textwrite}>Escrevendo: <Text style={{ color: "#CE4BA8" }}>{nomeBook}</Text></Paragraph>
                        <Button style={styles.buttoncarousel} onPress={() => navigation.navigate('Capítulos', { bookId: bookId, userId: userId })}>
                            <View style={{ display: "flex", flexDirection: "row" }}>

                                <Text style={styles.textcard}> Capítulos</Text>


                                <Image style={styles.imagechevron} source={require("../Images/rightChevron.png")} />
                            </View>
                        </Button>
                        <Button style={styles.buttoncarousel2} onPress={() => navigation.navigate("Jornada do Herói")}>
                            <View style={{ display: "flex", flexDirection: "row", }}>
                                <Text style={styles.textcard}> Jornada do Heroí</Text>
                                <Image style={styles.imagechevron2}
                                    source={{ uri: require("../Images/rightChevron2.png") }} />
                            </View>
                        </Button>
                        <View style={styles.viewcardper}>
                            <CarouselCardsContainer bookId={bookId} userId={userId} />
                        </View>
                    </View>
                </View>
                <View style={{ maxWidth: 300, margin: "auto" }}>
                    <View style={styles.containersalvarper}>
                        <Button style={{
                            backgroundColor: "#E88A8A", border: "3px solid  #D9D9D9", borderRadius: "1px", height: "40px", width: "90px", fontSize: "13px", display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            marginRight: "150px"
                        }} mode="contained" onPress={() => handleExcluir(bookId)}>
                            <Text style={{ color: "black", fontWeight: "bold", fontSize: 13 }}>Deletar Livro</Text>
                        </Button>
                        <TouchableOpacity
                            style={{
                                backgroundColor: "#D5ECB6",
                                border: "3px solid #D9D9D9",
                                borderRadius: "1px",
                                height: "40px",
                                width: "90px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                            mode="contained"
                            onPress={() => navigation.navigate("Atualizar Livros", { bookId: bookId, userId: userId })}
                        >
                            <Text style={{ fontSize: "13px", fontWeight: "bold", color: "black" }}> Editar Livro </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View >
                <LinearGradient
                    // Background Linear Gradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={colors}
                    locations={locations}
                    style={{
                        height: 7,
                        width: "100%",

                    }}
                />
            </View>
        </View >
    )

}
