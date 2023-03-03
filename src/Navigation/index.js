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
        options={{
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
          title: "Configurações",
          headerStyle: {
            backgroundColor: "#D5ECB4",
          },
          headerTintColor: "black",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
        name="Config"
        component={ConfigScreen}
       
      />
    </Stack.Navigator>
  );
};
