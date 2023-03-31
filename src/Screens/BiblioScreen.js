import * as React from "react";
import { View, Image } from "react-native";
import { Appbar, Button, Text } from "react-native-paper";
import { colors, locations, styles } from "../Configuracoes/styles";
import { LinearGradient } from "expo-linear-gradient";
import { Pressable } from "react-native";

export const BiblioScreen = ({ navigation }) => {
  const _handleMore = () => console.log("Shown more");
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const _goBack = () => console.log("Went back");


  
  return (
    <View style={styles.containerBiblio}>
      <Appbar.Header style={styles.navConfig}>
        <Appbar.BackAction onPress={_goBack} />
        <Appbar.Content
          titleStyle={{ textAlign: "center", fontWeight: "bold" }}
          title="Biblioteca"
        />
        <Appbar.Action icon="menu" onPress={_handleMore} />
      </Appbar.Header>
      <LinearGradient // Background Linear Gradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={colors}
        locations={locations}
        style={{ height: 7, width: "100%" }}
      />
       <View style={styles.shadow} />
      <Text style={styles.nomeUsuariob}>Bem vindo(a) Helene</Text>

      <View>
        <Pressable style={styles.buttonCL}>
          <Text style={styles.textBL}>+ Criar novo Livro</Text>
        </Pressable>
      </View>

      <View
        style={{
          flex: "1",
          flexWrap: "wrap",
          display: "flex",
          gap: "40px",
          marginLeft: "30px",
          flexDirection: "row",
        }}
      >
        <View>
          <Image
            source={require("../Images/Livro1.png")}
            style={styles.LivroB}
          />
          <View style={{display:"flex", flexDirection:"row", marginLeft:"30px", marginTop:"10px"   }}>
            <Text style={{ fontWeight: "bold",fontSize:"18px", marginLeft:"5px", textAlign:"auto" }}>Livro1</Text>
            <Image style={{width:"20px", height:"20px",marginLeft:"20px", position:"relative" }} source={require("../Images/Vector.png")}/>
          </View>
        </View>
        <View>
          <Image
            source={require("../Images/Livro2.png")}
            style={styles.LivroB}
          />
          <View style={{display:"flex", flexDirection:"row", marginLeft:"30px", marginTop:"10px"  }}>
            <Text style={{ fontWeight: "bold", fontSize:"18px",  marginLeft:"5px", textAlign:"auto"}}>Livro2</Text>
        <Image style={{width:"20px", height:"20px",marginLeft:"20px", position:"relative" }} source={require("../Images/Vector.png")}/>
          </View>
        </View>
        <View>
          <Image
            source={require("../Images/Livro3.png")}
            style={styles.LivroB}
          />
          <View style={{ display:"flex", flexDirection:"row", marginLeft:"30px", marginTop:"10px"  }}>
            <Text style={{ fontWeight: "bold",fontSize:"18px", marginLeft:"5px", textAlign:"auto" }}>Livro3</Text>
            <Image style={{width:"20px", height:"20px",marginLeft:"20px", position:"relative" }} source={require("../Images/Vector.png")}/>
          </View>
        </View>
      </View>

      <LinearGradient // Background Linear Gradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={colors}
        locations={locations}
        style={{ height: 7, width: "100%", marginTop: "135%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
 
  shadow: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 5,
    backgroundColor: '#f2f2f2',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
});