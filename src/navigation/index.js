import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { styles } from "../utils/styles";
import {HomeScreen} from "../screens/HomeScreen"; 
import {PaginaScreen} from "../screens/PaginaScreen"; 
import {SplashScreen} from "../screens/SplashScreen"; 
//import { DrawerScreen } from "../Screens/DrawerScreen";

const Stack = createNativeStackNavigator();
export const RootNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        style={styles.navConfig}
        options={{ headerShown: false }}
        name="PaginaScreen"
        component={PaginaScreen}
      />
  
      <Stack.Screen
        style={styles.navConfig}
        options={{ headerShown: false }}
        name="Splash"
        component={SplashScreen}
      />
    </Stack.Navigator>
  );
};
