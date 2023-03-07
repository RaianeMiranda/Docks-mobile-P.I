import { createStackNavigator } from "@react-navigation/stack";
import Register from "./RegisterScreen";

const Stack = createStackNavigator();

export const RootNavigation = () => {
  return (
    <Stack.Navigator>

<Stack.Screen
        name="RegisterScreen"
        component={Register}
      />
      
    </Stack.Navigator>
  );
};

