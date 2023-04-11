import { NavigationContainer } from "@react-navigation/native";
import { Provider as NativeProvider } from "react-native-paper";
import { MyDrawer } from "./src/Navigation/index";
// Função principal do app
export default function App() {
  return (
    // Inicia o container de navegação
    <NativeProvider>
    <NavigationContainer>
      <MyDrawer></MyDrawer>
    </NavigationContainer>
    </NativeProvider>
  );
}
