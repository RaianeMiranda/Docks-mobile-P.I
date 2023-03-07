import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export const RootNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen>
        <RootNavigation></RootNavigation>
      </Stack.Screen>
    </Stack.Navigator>
  );
};

