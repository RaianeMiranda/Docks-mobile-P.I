import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const SLIDER_WIDTH = Dimensions.get('window').width + 80;
const SLIDER_HEIGHT = Dimensions.get('window').width + 80;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.28);
const ITEM_HEIGHT = Math.round(SLIDER_HEIGHT * 0.29);

export const CarouselCards = () => {
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);

  const dataCard = [
    {
      body: 'Criação de Personagens',
    },
    {
      body: 'Alyssa',
    },
    {
      body: 'terceiro',
    },
    {
      body: 'Unique Card',
      title: 'Last Card',
      containerStyle: styles.containerLast,
      headerStyle: styles.headerLast,
      bodyStyle: styles.bodyLast,
    },
  ];

  const CarouselCardItem = ({ item, index }) => {
    const isFirstItem = index === 0;
    const isLastItem = index === dataCard.length - 1;
    const containerStyle = isFirstItem ? styles.containerFirst : (isLastItem ? styles.containerLast : styles.container);
    const headerStyle = isFirstItem ? styles.headerFirst : (isLastItem ? styles.headerLast : styles.header);
    const bodyStyle = isFirstItem ? styles.bodyFirst : (isLastItem ? styles.bodyLast : styles.body);

    return (
      <View key={item.body} style={containerStyle}>
        <Text style={headerStyle}>{item.title}</Text>
        <Text style={bodyStyle}>{item.body}</Text>
      </View>
    );
  };


  return (
    <View>
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
      />

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
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EBDEF0',
    borderRadius: 10,
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    paddingBottom: 0,
    alignItems: 'center',

  },

  containerFirst: {
    backgroundColor: '#EBDEF0', // change the color of the first card here
    borderRadius: 10,
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    paddingBottom: 40,
  },
  containerLast: {
    backgroundColor: 'yellow', // change the color of the first card here
    borderRadius: 10,
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    paddingBottom: 40,
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
    justifyContent: "center",
  
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
  }
})




export const dataCard = [
  {

    body: "Criação de Personagens",
  },

  {

    body: "Alyssa",

  },

]