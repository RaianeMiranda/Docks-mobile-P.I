import { Button, Text, View } from "react-native";
import { styles } from "../Configuracoes/styles";
import { Appbar } from 'react-native-paper';

export const ConfigScreen = ({ navigation }) => {
  const _goBack = () => console.log('Went back')
   const _handleMore = () => console.log('Shown more');

  return (
    
    <View style={styles.containerConfig}>
 <Appbar.Header style={styles.navConfig}>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content titleStyle={{textAlign: 'center'}} title="Configurações" />
      <Appbar.Action icon="menu" onPress={_handleMore} />
    </Appbar.Header>


      <Text>Sou o Config</Text>
      <Button
        title="Vá para o Céu "
        onPress={() => navigation.navigate("Config")}
      />
    </View>
  );
};