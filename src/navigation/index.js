import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
} from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import CarouselCards from "../cards/CaroulselCard";
import { InicialScreen } from "../screens/InicialScreen";
import { LoginScreen } from "../screens/LoginScreen";
import { CadScreen } from "../screens/cadScreen";
import { CadastroLivros } from "../screens/TestecadLivros";
import {BiblioScreen} from "../screens/BiblioScreen";
import cadMundo from "../screens/cadMundo";
import SnowflakeCK from "../screens/teste";
import ModalCadLivros from "../screens/cadLivro";
import UpdateLivro from "../screens/updateLivros";

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
                            size={28}
                            color="black"
                            style={{ marginRight: 15 }}
                            onPress={() => navigation.openDrawer()}
                        />
                    );
                },
                headerLeft: () => {
                    return;
                }, headerStyle: { backgroundColor: "#D5ECB4" },
            }}>
            <Drawer.Screen name="Página Inicial" component={InicialScreen} />
            <Drawer.Screen name="Card" component={CarouselCards} />
            <Drawer.Screen name="Login" component={LoginScreen} />
            <Drawer.Screen name="Cadastro" component={CadScreen} />
            <Drawer.Screen name="Cadastro Livros" component={CadastroLivros} />
            <Drawer.Screen name="Atualizar Livros" component={UpdateLivro} />
            <Drawer.Screen name="CadModal" component={ModalCadLivros} />
            <Drawer.Screen name="Biblioteca " component={BiblioScreen} />
            <Drawer.Screen name="Mundo" component={cadMundo} />
            <Drawer.Screen name="teste" component={SnowflakeCK} />
        </Drawer.Navigator>
    );
};
