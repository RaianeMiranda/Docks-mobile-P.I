import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../Screens/HomeScreen";
import { ConfigScreen } from "../Screens/ConfigScreen";

const Stack = createNativeStackNavigator();
export const RootNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Config" component={ConfigScreen} />
    </Stack.Navigator>
  );
};