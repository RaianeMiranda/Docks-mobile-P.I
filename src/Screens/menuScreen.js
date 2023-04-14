import * as React from "react";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button, Menu, Divider, Provider } from "react-native-paper";
import { styles } from "../Configuracoes/styles";

const menuTest = () => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <Provider>
      <View
        style={{
          paddingTop: 50,
          flexDirection: "row",
          justifyContent: "center",
          paddingBottom: 0,
        }}
      >
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Button onPress={openMenu}>Show menu</Button>}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#FFFFFF",
              border: "3px solid #F6EB60",
              width: "130",
              height: "50px",
              paddingTop: 0,
            }}
            onPress={() => console.log("Item 1")}
          >
            <Menu.Item title="Editar livro" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#FFFFFF",
              border: "3px solid #F6EB60",
              width: "130",
              height: "50px",
            }}
            onPress={() => console.log("Item 2")}
          >
            <Menu.Item title="Excluir livro" />
          </TouchableOpacity>
        </Menu>
      </View>
    </Provider>
  );
};

export default menuTest;
