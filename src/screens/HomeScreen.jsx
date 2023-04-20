import * as React from "react";
import { Button, View } from "react-native";

export const HomeScreen = ({ navigation }) => {
  return (
    <View>
          <Button
          title="Ir para Sobre"
          onPress={() => navigation.navigate("SobreScreen")}
        />
      <Button
        title="Ir para Personagem"
        onPress={() => navigation.navigate("PersonagemScreen")}
      />
       <Button
          title="Ir para Mundo"
          onPress={() => navigation.navigate("MundoScreen")}
        />
          <Button
          title="Ir para Snowflake"
          onPress={() => navigation.navigate("SnowflakeScreen")}
        />
    </View>
  );
};
 

