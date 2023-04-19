import * as React from "react";
import { Image } from "react-native";
import { View } from "react-native";

export const MenuPop = ({ navigation }) => {
  return (
    <View style={{ display: "flex",flexDirection: "row",  flexWrap:"wrap", rowGap:30 , gap:40, justifyContent:'center', marginTop:"20px" }}>
     
        <Image
          source={require("../Images/Livro1.png")}
          style={{ height: "150PX", width: "130PX" }}
        />
        <Image
          source={require("../Images/Livro2.png")}
          style={{ height: "150PX", width: "130PX" }}
        />
        <Image
          source={require("../Images/Livro3.png")}
          style={{ height: "150PX", width: "130PX" }}
        />
         <Image
          source={require("../Images/Livro3.png")}
          style={{ height: "150PX", width: "130PX" }}
        />
         <Image
          source={require("../Images/Livro3.png")}
          style={{ height: "150PX", width: "130PX" }}
        />
    
    </View>
  );
};

export default MenuPop;
