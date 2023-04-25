import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { BiblioScreen } from "../Screens/BiblioScreen";
import { ConfigScreen } from "../Screens/ConfigScreen";

import ModalCadLivros from "../Screens/ModalScreen";
import { Image } from "react-native";
import { styles } from "../Configuracoes/styles";
import { TouchableOpacity } from "react-native";

const Drawer = createDrawerNavigator();
const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      useLegacyImplementation
      screenOptions={{
        drawerStyle: {
          width: 250,
          height: 700,
          marginTop: "60px",
        },
        drawerPosition: "right",
        headerRight: () => {
          const navigation = useNavigation();
          return (
            <Ionicons
              name="menu"
              size={35}
              color="black"
              style={{ marginRight: 15 }}
              onPress={() => navigation.openDrawer()}
            />
          );
        },
        headerLeft: () => {
          return;
        },
        headerStyle: { backgroundColor: "#D5ECB4" },
      }}
    >
      <Drawer.Screen
        name="Biblioteca"
        component={BiblioScreen}
        options={{
          headerTitleAlign: "center",
          headerLeft: () => (
            <TouchableOpacity>
              <Image
                source={require("../Images/Docks.png")}
                style={styles.drawerFotoDocks}
              />
            </TouchableOpacity>
          ),
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
          },
        }}
      />
      <Drawer.Screen
        name="Configurações"
        component={ConfigScreen}
        options={{
          headerTitleAlign: "center",
          headerLeft: () => (
            <TouchableOpacity>
              <Image
                source={require("../Images/Voltar.png")}
                style={styles.drawerFotoVoltar}
              />
            </TouchableOpacity>
          ),
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
          },
        }}
      />

      <Drawer.Screen
        name="Cadastro de Livro"
        component={ModalCadLivros}
        options={{
          headerTitleAlign: "center",
          headerLeft: () => (
            <TouchableOpacity>
              <Image
                source={require("../Images/Voltar.png")}
                style={styles.drawerFotoVoltar}
              />
            </TouchableOpacity>
          ),
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
          },
        }}
      />
    </Drawer.Navigator>
  );
}
