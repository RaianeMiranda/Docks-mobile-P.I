import * as React from "react";
import { View, Text, Image } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./src/Configuracoes/styles";

function Biblioteca() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "PINK",
      }}
    >
      <Text>BIBLIO</Text>
    </View>
  );
}

function Heroi() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Text>HERO</Text>
    </View>
  );
}
function Snowflake() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Text>SNOWFLAKE</Text>
    </View>
  );
}
function Mundo() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Text>MUNDO</Text>
    </View>
  );
}
function Personagens() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Text>PERSONAGENS</Text>
    </View>
  );
}
function Sobrenos() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Text>SOBRENOSS</Text>
    </View>
  );
}
function Configuracoes() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderWidth: '10px',
        borderBottomColor: "grey",
      }}
    >
      <Text>CONFIGGS???</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();
const CustomDrawer = (props) => {

  

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeader}>
        <View>
          <Image
            source={require("./src/Images/Usuario.png")}
            style={styles.vectorUsuario}
          />
        </View>
        <View style={styles.infUsuario}>
          <Text style={styles.nomeUsuario}>Helene</Text>
          <Text>Helene123@gmail.com</Text>
        </View>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

function MyDrawer() {
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
          return "";
        },
        headerStyle: { backgroundColor: "#D5ECB4" },
      }}
    >
      <Drawer.Screen name="Biblioteca" component={Biblioteca} />
      <Drawer.Screen name="Jornada do Herói" component={Heroi} />
      <Drawer.Screen name="Snowflake" component={Snowflake} />
      <Drawer.Screen name="Criação de Mundo" component={Mundo} />
      <Drawer.Screen name="Criação de Personagens" component={Personagens} />
      <Drawer.Screen name="Sobre nós" component={Sobrenos} />
      <Drawer.Screen name="Configurações" component={Configuracoes} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}