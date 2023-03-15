import { View } from "react-native";
import { Appbar, Button, Text } from "react-native-paper";
import { styles } from "../Configuracoes/styles";
export const BiblioScreen = ({ navigation }) => {
  const _handleMore = () => console.log("Shown more");
  return (
    <View style={styles.containerBiblio}>
      <Appbar.Header style={styles.navConfig}>
        <Appbar.Content
          titleStyle={{ textAlign: "center", fontWeight: "bold" }}
          title="Biblioteca"
        />
        <Appbar.Action icon="menu" onPress={_handleMore} />
      </Appbar.Header>
      <Text style={styles.nomeUsuario}>Bem vindo(a) Helene</Text>
      <View>
        <Button style={styles.buttonCL}><Text style={styles.textBL}>+ Criar novo Livro</Text></Button>
      </View>
    </View>
  );
};
