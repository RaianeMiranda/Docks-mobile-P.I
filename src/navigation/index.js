import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "../screens/LoginScreen";
import { RegisterScreen } from "../screens/RegisterScreen";
import addDatas from "../screens/addDataScreen";

const Stack = createStackNavigator();

export const RootNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          headerShown: false,
          title: "Tela de Login",
        }}
      />

      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerShown: false,
          title: "Tela de Login",
        }}
      />

       <Stack.Screen
        name="addData"
        component={addDatas}
        options={{
          headerShown: false,
          title: "Tela de Login",
        }}
      />
    </Stack.Navigator>
  );
};

