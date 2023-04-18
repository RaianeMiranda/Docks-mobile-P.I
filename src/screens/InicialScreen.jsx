import { LinearGradient } from 'expo-linear-gradient'
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"
import { Button, } from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { CarouselCards2 } from '../cards/cardMundo'
import CarouselCards1 from '../cards/cardSnow'
import { colors, locations } from '../config/styles'
import { CarouselCards3 } from '../cards/cardPersona'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { auth } from '../config/firebase/firebase'


export const PaginaInicial = ({ route, navigation }) => {
    const [bookId, setBookId] = useState('');
    const [userId, setUserId] = useState('');
    const user = auth.currentUser;
    if (!user) {
        throw new Error("Usuário não autenticado.");
    }


    useEffect(() => {
        setBookId(route.params.bookId);
        setUserId(user.uid);
    }, [route.params.bookId])

    // const bookId = ;



    const withProps = (WrappedComponent) => ({ bookId, userId }) => {
        return <WrappedComponent bookId={bookId} userId={userId} />;
    };


    // const CarouselCardsWithProps1 = withProps(CarouselCards1);
    // const CarouselCardsWithProps2 = withProps(CarouselCards2);
    // const CarouselCardsWithProps3 = withProps(CarouselCards3);

    const CarouselCardsContainer = (props) => (
        <View>
            <CarouselCards1 bookId={props.bookId} userId={props.userId} />
            <CarouselCards2 bookId={props.bookId} userId={props.userId} />
            <CarouselCards3 bookId={props.bookId} userId={props.userId} />
        </View>
    );
    console.log(bookId)

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
            </View>
            <View style={{ flex: 1, backgroundColor: '#FFF2D8' }}>
                <Text style={styles.textwrite}>Escrevendo</Text>
                <Button style={styles.buttoncarousel}>
                    <View style={{ display: "flex", flexDirection: "row", }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Biblioteca')}>
                            <Text style={styles.textcard}> Capítulos</Text>
                        </TouchableOpacity>
                        <Image style={styles.imagechevron}
                            source={{ uri: require("../Images/rightChevron.png") }} />
                    </View>
                </Button>
                <Button style={styles.buttoncarousel2}>
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
        </SafeAreaProvider >
    )
    console.log(bookId)
}


const styles = StyleSheet.create({

    header: {
        color: "#222",
        backgroundColor: "#2250",
        fontSize: 14,
        fontWeight: "bold",
        paddingLeft: 20,
        paddingTop: 20,


    },

    textwrite: {
        color: "black",
        fontSize: "20px",
        fontWeight: "bolder",
        marginTop: "20px",
        marginLeft: "20px"
    },
    buttoncarousel: {
        border: "1px solid #F1C4A5",
        backgroundColor: "#F1C4A5",
        display: "flex",
        flexDirection: "row",
        width: "250px",
        marginLeft: "20px",
        borderRadius: "11px",
        marginTop: "15px"
    },
    buttoncarousel2: {
        border: "1px solid #BCE4E4",
        backgroundColor: "#BCE4E4",
        display: "flex",
        flexDirection: "row",
        width: "250px",
        marginLeft: "20px",
        borderRadius: "11px",
        marginTop: "15px",
        marginBottom: "30px"
    },
    textcard: {
        fontSize: "18px",
        color: "black"
    },
    imagechevron: {
        height: "20px",
        width: "20px",
        marginLeft: "135px"
    },
    imagechevron2: {
        height: "20px",
        width: "20px",
        marginLeft: "70px"
    },

    headerFirst: {
        color: "#fff", // change the text color of the first card here
        backgroundColor: "#FFF2D8", // change the background color of the first card here
        border: "4px solid #F4CCC8",
        borderRadius: "10px",
        fontSize: 14,
        fontWeight: "bold",
        paddingLeft: 20,
        paddingTop: "45%",
        borderBottomLeftRadius: "0px",
        borderBottomRightRadius: "0px",
    },
    image: {
        width: 10,
        height: 10
    },

    viewcardper: {
        marginBottom: "30px"
    }

})

