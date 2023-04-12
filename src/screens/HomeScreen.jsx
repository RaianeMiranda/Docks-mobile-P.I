import * as React from "react";
import { Button, View } from "react-native";

export const HomeScreen = ({ navigation }) => {
  return (
    <View>
          <Button
          title="Ir para Splash"
          onPress={() => navigation.navigate("SplashScreen")}
        />
      <Button
        title="Ir para Pagina"
        onPress={() => navigation.navigate("PaginaScreen")}
      />
       <Button
          title="Ir para Pagina2"
          onPress={() => navigation.navigate("Pagina2Screen")}
        />
          <Button
          title="Ir para Pagina3"
          onPress={() => navigation.navigate("Pagina3Screen")}
        />
    </View>
  );
};
 

