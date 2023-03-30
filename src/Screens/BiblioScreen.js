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
      <Text style={styles.nomeUsuariob}>Bem vindo(a) Helene</Text>

      <View>
        <Pressable style={styles.buttonCL}>
          <Text style={styles.textBL}>+ Criar novo Livro</Text>
        </Pressable>
      </View>

      <View style={styles.container}>
        <View style={styles.row}>
          <Image
            source={require("../Images/Livro1.png")}
            style={styles.image}
          />
          <Image
            source={require("../Images/Livro2.png")}
            style={styles.LivroB}
          />
        </View>
        <View style={styles.LivroB}>
          <Image
            source={require("../Images/Livro3.png")}
            style={styles.LivroB}
          />
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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
 
});
