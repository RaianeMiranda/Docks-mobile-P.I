import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>FEED</Text>
    </View>
  );
}

function Article() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>ARTICLE</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      screenOptions={{
        drawerPosition: "right",
        headerRight: () => {
          const navigation = useNavigation();

          return (
            <Ionicons
              name="menu"
              size={24}
              color="black"
              style={{ marginRight: 15 }}
              onPress={() => navigation.openDrawer()}
            />
          );
        },
      }}
    >
      <Drawer.Screen name="Feed" component={Feed} />
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
