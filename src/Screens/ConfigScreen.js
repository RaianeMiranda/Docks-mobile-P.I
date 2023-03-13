import * as React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
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
      <View style={styles.buttons}>
        <View>
          {" "}
          <Button style={styles.button1}>
            <Text style={styles.textSal}>salvar alterações</Text>
          </Button>
        </View>
        <View>
          {" "}
          <Button style={styles.button2}>
            <Text style={styles.textDel}>deletar conta</Text>
          </Button>
        </View>
      </View>
      <Text style={styles.tituloConfig1}>Termos e Licenças</Text>
      <View style={{ flex: 1, flexDirection: "colum" }}>
        <TouchableOpacity style={styles.buttonConfigTermos} activeOpacity={0.5}>
          <text style={styles.textTermos}>Termos e condições</text>
          <Image
            source={require("../Images/Vector.png")}
            style={styles.buttonImageIconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonConfigTermos} activeOpacity={0.5}>
          <text style={styles.textTermos}>Licenças</text>
          <Image
            source={require("../Images/Vector.png")}
            style={styles.buttonImageIconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonConfigTermos} activeOpacity={0.5}>
          <text style={styles.textTermos}>Políticas de Privacidade</text>
          <Image
            source={require("../Images/Vector.png")}
            style={styles.buttonImageIconStyle}
          />
          
        </TouchableOpacity>
      </View>
    </View>
  );
};
