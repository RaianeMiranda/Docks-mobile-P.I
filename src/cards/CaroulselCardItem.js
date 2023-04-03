import React from 'react'
import { View, Text, StyleSheet, Dimensions } from "react-native"

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const SLIDER_HEIGHT = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.28)
export const ITEM_HEIGHT = Math.round(SLIDER_HEIGHT * 0.29)


const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
  
      <Text style={styles.header}>{item.title}</Text>
      <Text style={styles.body}>{item.body}</Text>
    </View>
  )
}
//adicionar outra view e colocar cor

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    paddingBottom: 40,
  },
  header: {
    color: "#222",
    backgroundColor:"#2250",
    fontSize: 14,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 20
  },
  body: {
    color: "#222",
    fontSize: 14,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20
  }
})


export default CarouselCardItem