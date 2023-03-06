import * as React from "react";
import { Text, View, StatusBar, SafeAreaView } from "react-native";
import { styles } from "../Configuracoes/styles";
import { Appbar, TextInput, Button } from "react-native-paper";
export const ConfigScreen = ({ navigation }) => {
  const _goBack = () => console.log("Went back");
  const _handleMore = () => console.log("Shown more");
  const [text, setNome] = React.useState("");

  return (
    <View style={styles.containerConfig}>
      <Appbar.Header style={styles.navConfig}>
        <Appbar.BackAction onPress={_goBack} />
        <Appbar.Content
          titleStyle={{ textAlign: "center", fontWeight: "bold" }}
          title="Configurações"
        />
        <Appbar.Action icon="menu" onPress={_handleMore} />
      </Appbar.Header>
      <Text style={styles.tituloConfig1}>Configurações da Conta</Text>
      <TextInput
        style={styles.inputConfigNome}
        theme={{ colors: { primary: "#A9A9A9" } }}
        label="Nome"
        value={text}
        onChangeText={(text) => setNome(text)}
      />
      <TextInput
        style={styles.inputConfigEmail}
        theme={{ colors: { primary: "#A9A9A9" } }}
        label="Nome"
        value={text}
        onChangeText={(text) => setNome(text)}
      />
      <TextInput
        style={styles.inputConfigSenha}
        theme={{ colors: { primary: "#A9A9A9" } }}
        label="Nome"
        value={text}
        onChangeText={(text) => setNome(text)}
      />
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Button
          style={styles.buttonConfigSalvar}
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          Salvar alterações
        </Button>
        <Button
          style={styles.buttonConfigDeletar}
          mode="Contained"
          onPress={() => console.log("Pressed")}
        >
          Deletar conta
        </Button>
      </View>
      <Text style={styles.tituloConfig1}>Termos e Licenças</Text>
      <View style={{ flex: 1, flexDirection: "colum" }}>
        <Button
          style={styles.buttonConfigTermos}
          mode="Contained"
          onPress={() => console.log("Pressed")}
        >
          Termos e condições
        </Button>
        <Button
          style={styles.buttonConfigTermos}
          mode="Contained"
          onPress={() => console.log("Pressed")}
        >
          Licenças
        </Button>
        <Button
          style={styles.buttonConfigTermos}
          mode="Contained"
          onPress={() => console.log("Pressed")}
        >
          Políticas de Privacidade
        </Button>
      </View>
    </View>
  );
};
