import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../Screens/HomeScreen";
import { ConfigScreen } from "../Screens/ConfigScreen";
import { styles } from "../Configuracoes/styles";
import { CurrentRenderContext } from "@react-navigation/native";

const Stack = createNativeStackNavigator();
export const RootNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen style={styles.navConfig}
        options={{ headerShown: false }}
        name="Config"
        component={ConfigScreen}
       
      />
    </Stack.Navigator>
  );
};
