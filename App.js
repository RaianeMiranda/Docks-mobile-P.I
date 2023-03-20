
import { NavigationContainer } from "@react-navigation/native";
import { RootNavigation } from "./src/Navigation";


export default function App() {
  return (
    // Inicia o container de navegação
    <NavigationContainer>
      <RootNavigation/>
    </NavigationContainer>
  );
  }