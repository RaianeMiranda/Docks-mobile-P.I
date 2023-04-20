import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"
import { Button } from 'react-native-paper'
import Carousel, { Pagination } from 'react-native-snap-carousel'

const SLIDER_WIDTH = Dimensions.get('window').width + 80
const SLIDER_HEIGHT = Dimensions.get('window').width + 80
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.28)
const ITEM_HEIGHT = Math.round(SLIDER_HEIGHT * 0.29)

const CarouselCardItem = ({ item, index }) => {
    const isFirstItem = index === 0;
    const headerStyle = isFirstItem ? styles.headerFirst : (isFirstItem ? styles.headerLast : styles.header);
    const containerStyle = isFirstItem ? styles.containerFirst : (isFirstItem ? styles.containerLast : styles.container);
    const bodyStyle = isFirstItem ? styles.bodyFirst : (isFirstItem ? styles.bodyLast : styles.body);
    const imageStyle = isFirstItem ? styles.imageFirst : (isFirstItem ? styles.imageLast : styles.image);


    return (
        <View>
            <View style={containerStyle} key={index}>
                <Text style={headerStyle}>{item.title}</Text>
                <Text style={bodyStyle}>{item.body}</Text>
                <Image style={imageStyle} source={item.image} />

            </View>
        </View>
    );
};

const CarouselCards1 = (props) => {

    const _goBack = () => console.log("Went back");
    const _handleMore = () => console.log("Shown more");
    const [index, setIndex] = React.useState(0)
    const isCarousel = React.useRef(null)
    const [idUsuario, setIdUsuario] = useState("");
    const [bookId, setBookId] = useState("");

    useEffect(() => {
        // console.log("BookID", props?.bookId);
        setIdUsuario(props?.idUsuario);
        setBookId(props?.bookId);
    }, [props?.bookId])

    return (
        <View style={styles.viewcarousel}>
            <View style={styles.viewcarouselcard}>
                <Carousel
                    layout="default"
                    layoutCardOffset={9}
                    ref={isCarousel}
                    data={dataCard}
                    renderItem={CarouselCardItem}
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
export const dataCard = [
    {
        image: require("../../src/Images/snow.png"),
        body: "Método Snowflake",


    },

    {
        body: "1. Resuma seu livro em uma frase",

    },
    {

        body: "2. Transforme a frase em um parágrafo"

    },

]



export default CarouselCards1
