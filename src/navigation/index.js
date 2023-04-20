import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
} from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { LoginScreen } from "../screens/LoginScreen";
import { CadScreen } from "../screens/cadScreen";
import { BiblioScreen } from "../screens/BiblioScreen";
import cadMundo from "../screens/cadMundo";
import { PaginaInicial } from "../screens/InicialScreen";
import ModalCadLivros from "../screens/cadLivro";
import AltLivro from "../screens/AltLivro";
import AltMundo from "../screens/AltMundo";
import { listMundo } from "../screens/listMundo";
import CarouselCards1 from "../cards/cardSnow";
import cadPersona from "../screens/cadPersona";
import Altpersonagens from "../screens/AltPersona";

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
            <Drawer.Screen name="Cadastro" component={CadScreen} />
            <Drawer.Screen name="Biblioteca" component={BiblioScreen} />
            <Drawer.Screen name="Login" component={LoginScreen} />
            <Drawer.Screen name="Página Inicial" component={PaginaInicial} />
            <Drawer.Screen name="Card" component={CarouselCards1} />
            <Drawer.Screen name="Atualizar Livros" component={AltLivro} />
            <Drawer.Screen name="CadModal" component={ModalCadLivros} />
            <Drawer.Screen name="Mundo" component={cadMundo} />
            <Drawer.Screen name="Persona" component={cadPersona} />
            <Drawer.Screen name="ListMundo" component={listMundo} />
            <Drawer.Screen name="altMundo" component={AltMundo} />
            <Drawer.Screen name="cadPersona" component={cadPersona} />
            <Drawer.Screen name="altPersona" component={Altpersonagens} />
        </Drawer.Navigator>
    );
};
