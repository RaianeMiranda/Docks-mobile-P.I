import React from 'react'
import { View, Text, StyleSheet, Dimensions } from "react-native"
import Carousel, { Pagination } from 'react-native-snap-carousel'

const SLIDER_WIDTH = Dimensions.get('window').width + 80
const SLIDER_HEIGHT = Dimensions.get('window').width + 80
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.28)
const ITEM_HEIGHT = Math.round(SLIDER_HEIGHT * 0.29)

const CarouselCardItem = ({ item, index }) => {
  const isFirstItem = index === 0
  const headerStyle = isFirstItem ? styles.headerFirst : styles.header
  const containerStyle = isFirstItem ? styles.containerFirst : styles.container

  return (
    <View style={containerStyle} key={index}>
      <Text style={headerStyle}>{item.title}</Text>
      <Text style={styles.body}>{item.body}</Text>
    </View>
  )
}

const CarouselCards = () => {
  const [index, setIndex] = React.useState(0)
  const isCarousel = React.useRef(null)

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
          backgroundColor: 'rgba(0, 0, 0, 0.92)'
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
    backgroundColor: 'white',
    borderRadius: 10,
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    paddingBottom: 40,
  },
  containerFirst: {
    backgroundColor: 'red', // change the color of the first card here
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
    border: "4px solid #D5ECB6",
    borderRadius: "10px",
    fontSize: 14,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 20
  },
  body: {
    color: "#222",
    backgroundColor: "#D5ECB6",
    fontSize: 14,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20
  }
})

export const dataCard = [
  {
    title: "Aenean leo",
    body: "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis.",
  },
  {
    title: "In turpis",
    body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu.",
  },
  {
    title: "Lorem Ipsum",
    body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue.",
  }
]

export default CarouselCards
