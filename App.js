import { NavigationContainer } from '@react-navigation/native';
import { MyDrawer } from './src/navigation';

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}