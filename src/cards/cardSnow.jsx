import { collection, onSnapshot } from 'firebase/firestore';
import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, Button } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { database } from '../config/firebase/firebase';

const SLIDER_WIDTH = Dimensions.get('window').width + 80;
const SLIDER_HEIGHT = Dimensions.get('window').width + 80;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.28);
const ITEM_HEIGHT = Math.round(SLIDER_HEIGHT * 0.29);

export const CarouselCards1 = ({ bookId, userId, navigation }) => {
    console.log(navigation)
    const [index, setIndex] = useState(0);
    const isCarousel = useRef(null);
    const [etapas, setEtapas] = useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(
            collection(database, 'etapas'),
            querySnapshot => {
                const etapasTemp = [];
                querySnapshot.forEach(doc => {

                    etapasTemp.push({
                        ...doc.data(),
                        id: doc.id,
                    });

                }
                );
                etapasTemp.sort((a, b) => a.nomeEtapas.localeCompare(b.nomeEtapas));
                setEtapas(etapasTemp);
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
            body: "Criação de Snowflake",
            image: require("../../src/Images/snow.png"),
            onPress: () =>
                navigation.navigate("Biblioteca", { index: 0, bookId, userId }),
        },
    ];

    const newCards = etapas.map((etapas) => ({
        body: etapas.nomeEtapas,
        onPress: () =>
            navigation.navigate("altEtapa", {
                index: 1,
                bookId,
                etapasId: etapas.id,
                userId,
            }),
        id: etapas.id,
    }));

    const updatedCardArray = [...cardArray.slice(0, 1), ...newCards, ...cardArray.slice(1)];



    const CarouselCardItem = ({ item, index }) => {
        const isFirstItem = index === 0;
        const isLastItem = index === updatedCardArray.length - 1;
        const headerStyle = isFirstItem ? styles.headerFirst : styles.header;
        const containerStyle = isFirstItem ? styles.containerFirst : styles.container;
        const bodyStyle = isFirstItem ? styles.bodyFirst : styles.body;
        const imageStyle = isFirstItem ? styles.imageFirst : styles.image;


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
        <View style={styles.viewcarousel}>
            <View style={styles.viewcarouselcard}>
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

            </View>

            {<Pagination
                activeDotIndex={index}
                carouselRef={isCarousel}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 0,
                    marginHorizontal: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.92)',

                }}
                useRef={{
                    paddingLeft: "18.5px",
                    paddingRight: "158.5px",
                }}
                inactiveDotOpacity={0}
                inactiveDotScale={0.6}
                tappableDots={true}

            />}

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F4CCC8',
        borderRadius: 10,
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        paddingBottom: 0,
    },

    header: {
        color: "#222",
        backgroundColor: "#2250",
        fontSize: 14,
        fontWeight: "bold",
        paddingLeft: 20,
        paddingTop: 20,


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
        fontSize: 13,
        fontWeight: "bolder",
        paddingLeft: 15,
        paddingLeft: 20,
        paddingRight: 15,
        marginTop: "12%",
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
    containerFirst: {
        backgroundColor: "#F4CCC8", // change the color of the first card here
        borderRadius: 10,
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        paddingBottom: 40,
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

    imageFirst: {
        width: 50,
        height: 50,
        display: "flex",
        position: "fixed",
        marginTop: "30px",
    },


    viewcarouselcard: {
        marginBottom: "30px"
    },
    viewcardper: {
        marginBottom: "30px"
    }

})

