import * as React from "react";
import { Button, View } from "react-native";

export const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Ir para Pagina"
        onPress={() => navigation.navigate("PaginaScreen")}
      />
    </View>
  );
};
