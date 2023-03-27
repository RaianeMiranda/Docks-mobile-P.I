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

function Feed() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "PINK",
      }}
    >
      <Text>melancia</Text>
    </View>
  );
}

function Article() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Text>ARTICLE</Text>
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
        <View><Text>Helene</Text></View>
      
        <Text>Helene123@gmail.com</Text>
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
      <Drawer.Screen name="jaboticaba" component={Feed} />
      <Drawer.Screen name="Article" component={Article} />
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
