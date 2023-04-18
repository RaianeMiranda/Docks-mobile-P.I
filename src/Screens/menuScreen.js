import * as React from "react";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button, Menu, Provider } from "react-native-paper";
import { styles } from "../Configuracoes/styles";

const menuTest = () => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <Provider>
      <View
        style={styles.containerMenu3p}
      >
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Button onPress={openMenu}>Show menu</Button>}
          contentStyle={{
            paddingVertical: 0,
          }}
        >
          <TouchableOpacity
            style={styles.item1menu}
            onPress={() => console.log("Item 1")}
          >
            <Menu.Item title="Editar livro" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item2menu}
            onPress={() => console.log("Item 2")}
          >
            <Menu.Item   title="Excluir livro" />
          </TouchableOpacity>
        </Menu>
      </View>
    </Provider>
  );
};

export default menuTest;
