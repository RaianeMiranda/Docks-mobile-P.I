import * as React from "react";
import { Text, View, Image } from "react-native";
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
      <View style={styles.inputsConfig}>
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
          label="Email"
          value={text}
          onChangeText={(text) => setNome(text)}
        />
        <TextInput
          style={styles.inputConfigSenha}
          theme={{ colors: { primary: "#A9A9A9" } }}
          secureTextEntry
          value={text}
          label="Senha"
          onChangeText={(text) => setNome(text)}
        />
      </View>
      <View style={styles.buttonsConfig}>
        <View>
          <Button style={styles.buttonSal}>
            <Text style={styles.textSal}>salvar alterações</Text>
          </Button>
        </View>
        <View>
          <Button style={styles.buttonDel}>
            <Text style={styles.textDel}>deletar conta</Text>
            <Image
              source={require("../Images/VectorRed.png")}
              style={styles.vectorRed}
            />
          </Button>
        </View>
      </View>
      <Text style={styles.tituloConfig2}>Termos e Licenças</Text>
      <View style={styles.buttonTermos}>
        <View>
          <Button style={styles.buttonConfigTermos1} activeOpacity={0.5}>
            <text style={styles.textTermos1}>Termos e condições</text>
            <View style={styles.imageTermos1}>
              <Image
                source={require("../Images/VectorOrange.png")}
                style={styles.vectorOrange}
              />
            </View>
          </Button>
        </View>
        <View>
          <Button style={styles.buttonConfigTermos2} activeOpacity={0.5}>
            <text style={styles.textTermos2}>Licenças</text>
            <View style={styles.imageTermos2}>
            <Image
              source={require("../Images/VectorOrange.png")}
              style={styles.vectorOrange}
            />
            </View>
          </Button>
        </View>
        <View>
          <Button style={styles.buttonConfigTermos3} activeOpacity={0.5}>
            <text style={styles.textTermos3}>Políticas de Privacidade</text>
            <View style={styles.imageTermos3}>
            <Image
              source={require("../Images/VectorOrange.png")}
              style={styles.vectorOrange}
            />
            </View>
          </Button>
        </View>
      </View>
    </View>
  );
};
