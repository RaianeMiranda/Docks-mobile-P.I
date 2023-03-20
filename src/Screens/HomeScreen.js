import { Button, Text, View } from "react-native";
import { styles } from "../Configuracoes/styles";


export const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonHome}>
      <Text>Oi Eu sou A HOME SCREEN</Text>
      <Button 
        title="Ir para Config"
        // Realiza a ação de enviar para tela Config
        onPress={() => navigation.navigate("Config")}
      />
      <Button 
        title="Ir para Biblio"
        onPress={() => navigation.navigate("Biblio")}
      />
      <Button 
        title="Ir para o drawer"
        onPress={() => navigation.navigate("Drawer")}
      />
      </View>
    </View>
  );
};