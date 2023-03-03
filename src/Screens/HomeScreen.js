import { Button, Text, View } from "react-native";
import { styles } from "../Configuracoes/styles";


export const HomeScreen = ({navigation}) => {
  return (
    <View
        style={styles.container}
    >
      <Text>Oi Eu sou A HOME SCREEN</Text>
      <Button
        title="Ir para Config"
        // Realiza a ação de enviar para tela Config
        onPress={() => navigation.navigate("Config")}
      />
    </View>
  );
};