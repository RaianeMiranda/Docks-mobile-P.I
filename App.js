import Stream from 'stream-browserify';
import crypto from 'crypto-browserify';

import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-native-paper";
import Register from "./src/screens/RegisterScreen";


export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Register />
      </NavigationContainer>
    </Provider>
  );
}
