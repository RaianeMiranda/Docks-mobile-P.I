import { Button, Text, View } from "react-native";
import { styles } from "../Configuracoes/styles";

export const ConfigScreen = ({ navigation }) => {
  return (
    
    <View style={styles.containerConfig}>
      <Text>Sou o Config</Text>
      <Button
        title="Vá para o Céu "
        onPress={() => navigation.navigate("Config")}
      />
    </View>
  );
};