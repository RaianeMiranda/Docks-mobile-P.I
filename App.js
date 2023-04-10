import { NavigationContainer } from "@react-navigation/native";
import { MyDrawer } from "./src/Navigation/index";
// Função principal do app
export default function App() {
  return (
    // Inicia o container de navegação
    <NavigationContainer>
      <MyDrawer></MyDrawer>
    </NavigationContainer>
  );
}
