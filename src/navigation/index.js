import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { CadScreen } from "../screens/CadScreen";
import CapitulosCKScreen from "../screens/CapitulosCKScreen";
import CapitulosScreen from "../screens/CapitulosScreen";
import CarouselCards from "../screens/CarouselCard";
import { CarouselCards2 } from "../screens/CarouselCardJornada";
import { CarouselCards3 } from "../screens/CarouselCardPersonagem";

import CKeditor from "../screens/Ckeditor";
import CriacaoMundos from "../screens/CriacaoMundosScreen";
import { ForgotPasswordScreen } from "../screens/ForgotPasswordScreen";
import HomeScreen from "../screens/HomeScreen";
import { LoginScreen } from "../screens/LoginScreen";
import SnowflakeCK from "../screens/SnowflakeCKScreen";

const Stack = createStackNavigator()

export const RootNavigation = () => {
    return (

        <Stack.Navigator>
           
              <Stack.Screen
                name="LoginScreen2"
                component={CarouselCards}
                options={{
                    headerShown: false,
                    title: "Tela de Cards",
                }}
            />
               <Stack.Screen
                name="CardsPersonagem"
                component={CarouselCards3}
                options={{
                    headerShown: false,
                    title: "Tela de Cards",
                }}
            />
              <Stack.Screen
                name="LoginScreen3"
                component={CarouselCards2 }
                options={{
                    headerShown: false,
                    title: "Tela de Cards",
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
                name="CKeditor"
                component={CKeditor}
                options={{
                    headerShown: false,
                    title: "Tela de Personagens",
                }}
            />
              <Stack.Screen
                name="CriacaoMundos"
                component={CriacaoMundos}
                options={{
                    headerShown: false,
                    title: "Tela de Mundos",
                }}
            />
              <Stack.Screen
                name="CapitulosScreen"
                component={CapitulosScreen}
                options={{
                    headerShown: false,
                    title: "Tela de Capítulos",
                }}
            />
              <Stack.Screen
                name="SnowflakeCK"
                component={SnowflakeCK}
                options={{
                    headerShown: false,
                    title: "Tela de Snowflake",
                }}
            />
             
              <Stack.Screen
                name="CapitulosCKScreen"
                component={CapitulosCKScreen}
                options={{
                    headerShown: false,
                    title: "Tela de Capítulos",
                }}
            />
             
            <Stack.Screen
                name="ForgotPasswordScreen"
                component={ForgotPasswordScreen}
                options={{
                    headerShown: false,
                    title: "Tela de Login",
                }}
            />
              <Stack.Screen
                name="HomeNavigation"
                component={TabNavigation}
                options={{
                    headerShown: false,
                    title: "Tela do Aplicativo",
                }}
            />
            <Stack.Screen
                name="CadScreen"
                component={CadScreen}
                options={{
                    headerShown: false,
                    title: "Tela de Cadastro",
                }}
            />
            
            
        </Stack.Navigator>
    );
};
const Tab = createMaterialBottomTabNavigator();
export const TabNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: "Home",
                }}
            />
            <Tab.Screen name="Home2" component={CadScreen} />
            <Tab.Screen name="Home3" component={CKeditor} />
        </Tab.Navigator>
    );
};