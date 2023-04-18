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
import SimpleMenu, { MyComponent } from "../Screens/MenuPopUpScreen";
import ModalCadLivros from "../Screens/ModalScreen";
import MenuPop from "../Screens/MenuPopUpScreen";
import  menuTest from "../Screens/menuScreen";



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
               
            <Drawer.Screen name="Biblioteca" component={BiblioScreen} />
            <Drawer.Screen name="configScreen" component={ConfigScreen} />
            <Drawer.Screen name="MenuPopUp" component={MenuPop} />
            <Drawer.Screen name="menu" component={menuTest} />
            <Drawer.Screen name="CadModal" component={ModalCadLivros} />
        </Drawer.Navigator>
    );
};