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
      <Text style={styles.nomeUsuariob}>Bem vindo(a) Helene</Text>

      <View>
        <Provider>
          <Portal>
            <Modal
              visible={visible}
              onDismiss={hideModal}
              
            >
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
