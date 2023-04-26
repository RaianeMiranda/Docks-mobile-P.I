import { collection, onSnapshot } from 'firebase/firestore';
import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, Button } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { database } from '../config/firebase/firebase';

const SLIDER_WIDTH = Dimensions.get('window').width + 80;
const SLIDER_HEIGHT = Dimensions.get('window').width + 80;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.28);
const ITEM_HEIGHT = Math.round(SLIDER_HEIGHT * 0.29);

export const CarouselCards3 = ({ bookId, userId, navigation }) => {
    console.log(navigation)
    const [index, setIndex] = useState(0);
    const isCarousel = useRef(null);
    const [personagens, setPersonagens] = useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(
            collection(database, 'personagens'),
            querySnapshot => {
                const personagensTemp = [];
                querySnapshot.forEach(doc => {
                    const data = doc.data();
                    if (data.bookId === bookId) {
                        personagensTemp.push({
                            ...data,
                            id: doc.id,
                        });
                    }
                });
                setPersonagens(personagensTemp);
            }
        );
        return () => unsubscribe();
    }, [bookId]);

    const handlePress = (index) => {
        const item = data[index];
        item.onPress();
    };


    const cardArray = [
        {
            body: "Criação de personagem",
            image: require("../../src/Images/heroi.png"),
            onPress: () =>
                navigation.navigate("Biblioteca", { index: 0, bookId, userId }),
        },
        {
            image: require("../../src/Images/mais.png"),
            onPress: () =>
                navigation.navigate("cadPersona", {
                    index: cardArray.length - 1,
                    bookId,
                    userId,
                }),
        },
    ];

    const newCards = personagens.map((personagens) => ({
        body: personagens.nomePersona,
        onPress: () =>
            navigation.navigate("altPersona", {
                index: 1,
                bookId,
                personagensId: personagens.id,
                userId,
            }),
        id: personagens.id,
    }));

    const updatedCardArray = [...cardArray.slice(0, 1), ...newCards, ...cardArray.slice(1)];



    const CarouselCardItem = ({ item, index }) => {
        const isFirstItem = index === 0;
        const isLastItem = index === updatedCardArray.length - 1;
        const headerStyle = isFirstItem ? styles.headerFirst : (isLastItem ? styles.headerLast : styles.header);
        const containerStyle = isFirstItem ? styles.containerFirst : (isLastItem ? styles.containerLast : styles.container);
        const bodyStyle = isFirstItem ? styles.bodyFirst : (isLastItem ? styles.bodyLast : styles.body);
        const imageStyle = isFirstItem ? styles.imageFirst : (isLastItem ? styles.imageLast : styles.image);

        return (
            <TouchableOpacity onPress={item.onPress}>
                <View style={containerStyle} key={index}>
                    <Text style={headerStyle}>{item.title}</Text>
                    {typeof item.body === 'string' ? (
                        <Text style={bodyStyle}>{item.body}</Text>
                    ) : (
                        <View style={{ marginVertical: 10 }}>{item.body}</View>
                    )}
                    <Image style={imageStyle} source={item.image} />
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View >
            <Carousel
                layout="default"
                layoutCardOffset={9}
                ref={isCarousel}
                data={updatedCardArray}
                renderItem={({ item, index }) => (
                    <CarouselCardItem item={item} index={index} navigation={navigation} onPress={handlePress} />

                )}
                sliderWidth={SLIDER_WIDTH}
                sliderHeight={SLIDER_HEIGHT}
                itemWidth={ITEM_WIDTH}
                onSnapToItem={(index) => setIndex(index)}
                useScrollView={true}
                inactiveSlideScale={0.94}
                inactiveSlideOpacity={100}
                contentContainerCustomStyle={{ paddingLeft: "25px" }}
            >
            </Carousel>

            <Pagination
                activeDotIndex={index}
                carouselRef={isCarousel}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 10,
                    marginHorizontal: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.92)',

                }}

                inactiveDotOpacity={0}
                inactiveDotScale={0.6}
                tappableDots={true}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EBDEF0',
        borderRadius: 10,
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        paddingBottom: 0,
        alignItems: "center",
        marginBottom: 10,

    },
    containerFirst: {
        backgroundColor: '#EBDEF0', // change the color of the first card here
        borderRadius: 10,
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        paddingBottom: 40,
    },
    containerLast: {
        backgroundColor: '#FFF2D8',
        border: "5px solid #EBDEF0", // change the color of the first card here
        borderRadius: 10,
        width: "40px",
        height: "40px",
        marginTop: "25%",
        justifyContent: "center",

    },
    header: {
        color: "#222",
        backgroundColor: "#2250",
        fontSize: 14,
        fontWeight: "bold",
        paddingLeft: 20,
        paddingTop: 20
    },

    headerFirst: {
        color: "#fff", // change the text color of the first card here
        backgroundColor: "#FFF2D8", // change the background color of the first card here
        border: "4px solid #EBDEF0",
        borderRadius: "10px",
        fontSize: 14,
        fontWeight: "bold",
        paddingLeft: 20,
        paddingTop: 20,
        paddingTop: "45%",
        borderBottomLeftRadius: "0px",
        borderBottomRightRadius: "0px",

    },
    bodyFirst: {
        color: "black",
        fontSize: 14,
        fontWeight: "bolder",
        paddingLeft: 20,
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: "15px",
        textAlign: "center",

    },

    body: {
        color: "black",
        fontSize: 14,
        fontWeight: "bolder",
        paddingLeft: 15,
        paddingLeft: 20,
        paddingRight: 15,
        marginTop: "25%",

    },
    image: {
        width: 10,
        height: 10
    },
    imageFirst: {
        width: 50,
        height: 50,
        display: "flex",
        position: "fixed",
        marginTop: "30px",
    },
    imageLast: {
        width: "20px",
        height: "20px",
        marginBottom: 20,
        marginLeft: 5
    },
})
