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
import cadPersona from "../screens/cadPersona";
import Altpersonagens from "../screens/AltPersona";
import cadEtapaSnow from "../screens/cadEtapaSnow";
import AltEtapasSnow from "../screens/AltEtapasSnow";
import cadCapitulos from "../screens/cadCapitulo";
import altCapitulos from "../screens/AltCapitulos";
import listCapitulos from "../screens/ListCapitulos";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "../config/styles";
import { Image } from "react-native";
import { auth, onAuthStateChanged } from "../config/firebase/firebase";
import { useEffect, useState } from "react";

const Drawer = createDrawerNavigator();

const CustomDrawer = (props) => {
    return (

        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>

    );
};

export function MyDrawer() {
    const [user, setUser] = useState(null);
    const navigation = useNavigation();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        });

        return unsubscribe;
    }, []);

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
                component={user ? BiblioScreen : LoginScreen}
                options={{
                    headerTitleAlign: "center",
                    headerLeft: () => (
                        <TouchableOpacity>
                            <Image
                                source={require("../Images/logodocks.png")}
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
                name="Página Inicial"
                component={PaginaInicial}
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
            <Drawer.Screen options={{ drawerLabel: () => null }} name="Atualizar Livros" component={AltLivro} />
            <Drawer.Screen options={{ drawerLabel: () => null }} name="CadModal" component={ModalCadLivros} />

            <Drawer.Screen options={{ drawerLabel: () => null }} name="Persona" component={cadPersona} />
            <Drawer.Screen options={{ drawerLabel: () => null }} name="ListMundo" component={listMundo} />
            <Drawer.Screen options={{ drawerLabel: () => null }} name="altMundo" component={AltMundo} />
            <Drawer.Screen options={{ drawerLabel: () => null }} name="cadPersona" component={cadPersona} />
            <Drawer.Screen options={{ drawerLabel: () => null }} name="altPersona" component={Altpersonagens} />
            <Drawer.Screen options={{ drawerLabel: () => null }} name="cadEtapa" component={cadEtapaSnow} />
            <Drawer.Screen options={{ drawerLabel: () => null }} name="altEtapa" component={AltEtapasSnow} />
            <Drawer.Screen options={{ drawerLabel: () => null }} name="cadCap" component={cadCapitulos} />
            <Drawer.Screen options={{ drawerLabel: () => null }} name="altCap" component={altCapitulos} />
            <Drawer.Screen options={{ drawerLabel: () => null }} name="listCap" component={listCapitulos} />
            <Drawer.Screen options={{ drawerLabel: () => null }} name="Login" component={user ? BiblioScreen : LoginScreen} />
            <Drawer.Screen options={{ drawerLabel: () => null }} name="Cadastro" component={CadScreen} />
            <Drawer.Screen options={{ drawerLabel: () => null }} name="cadMundo" component={cadMundo} />
        </Drawer.Navigator>
    );
};
