import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./src/Configuracoes/styles";


function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>melancia</Text>
    </View>
  );
}

function Article() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" , backgroundColor:"pink"}}>
      <Text>ARTICLE</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

const UserView = () => {
  return(
    <View style={{backgroundColor:"white", height:"100px"}}/>
  )
}

function MyDrawer() {

  return (
    <Drawer.Navigator 
      useLegacyImplementation
      screenOptions={{
        drawerStyle: {
          backgroundColor: 'pink',
          width: 250,
          height: 700,
          marginTop: 60
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
        headerLeft:()=> {
          return ""
        }
      }}
      
    >
      <Drawer.Screen style={styles.kk} name="jaboticaba" component={Feed}  />
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
