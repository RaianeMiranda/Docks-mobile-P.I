import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../Screens/HomeScreen";
import { ConfigScreen } from "../Screens/ConfigScreen";
import { styles } from "../Configuracoes/styles";
import { BiblioScreen } from "../Screens/BiblioScreen";
import { DrawerScreen} from "../Screens/DrawerScreen";

const Stack = createNativeStackNavigator();
export const RootNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        style={styles.navConfig}
        options={{ headerShown: false }}
        name="Config"
        component={ConfigScreen}
      />
      <Stack.Screen
        style={styles.navConfig}
        options={{ headerShown: false }}
        name="Biblio"
        component={BiblioScreen}
      />
       <Stack.Screen
        style={styles.navConfig}
        options={{ headerShown: false }}
        name="Drawer"
        component={DrawerScreen}
      />
    </Stack.Navigator>
  );
};


