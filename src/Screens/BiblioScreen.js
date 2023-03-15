import * as React from "react";
import { View } from "react-native";
import {
  Appbar,
  Button,
  Modal,
  Portal,
  Provider,
  Text,
} from "react-native-paper";
import { styles } from "../Configuracoes/styles";

export const BiblioScreen = ({ navigation }) => {
  const _handleMore = () => console.log("Shown more");
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  

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
        <Provider>
          <Portal>
            <Modal visible={visible} onDismiss={hideModal} style={styles.modalBiblioconteudo}>
              <Text>Example Modal. Click outside this area to dismiss.</Text>
            </Modal>
          </Portal>
          <Button style={styles.buttonCL} onPress={showModal}>
            <Text style={styles.textBL}>+ Criar novo Livro</Text>
          </Button>
        </Provider>
      </View>
    </View>
  );
};
