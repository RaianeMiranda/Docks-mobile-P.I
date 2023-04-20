import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { styles } from "../utils/styles";
import {HomeScreen} from "../screens/HomeScreen"; 
import {PersonagemScreen} from "../screens/PersonagemScreen"; 
import {SobreScreen} from "../screens/SobreScreen"; 
import { MundoScreen } from "../screens/MundoScreen";
import { SnowflakeScreen } from "../screens/SnowflakeScreen";

//import { DrawerScreen } from "../Screens/DrawerScreen";

const Stack = createNativeStackNavigator();
export const RootNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        style={styles.navConfig}
        options={{ headerShown: false }}
        name="HomeScreen"
        component={HomeScreen}
      />
         <Stack.Screen
        style={styles.navConfig}
        options={{ headerShown: false }}
        name="SobreScreen"
        component={SobreScreen}
      />
        <Stack.Screen
        style={styles.navConfig}
        options={{ headerShown: false }}
        name="MundoScreen"
        component={MundoScreen}
      />
        <Stack.Screen
        style={styles.navConfig}
        options={{ headerShown: false }}
        name="SnowflakeScreen"
        component={SnowflakeScreen}
      />
  
      <Stack.Screen
        style={styles.navConfig}
        options={{ headerShown: false }}
        name="PersonagemScreen"
        component={PersonagemScreen}
      />
    </Stack.Navigator>
  );
};
