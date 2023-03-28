import { NavigationContainer } from "@react-navigation/native";
import { RootNavigation } from "./src/Navigation";
// Função principal do app
export default function App() {
  return (
    // Inicia o container de navegação
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
}
