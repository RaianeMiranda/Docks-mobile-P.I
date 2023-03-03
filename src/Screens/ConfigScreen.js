import { Button, Text, View } from "react-native";

export const ConfigScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Sou o Config</Text>
      <Button
        title="Vá para o Céu "
        onPress={() => navigation.navigate("Config")}
      />
    </View>
  );
};