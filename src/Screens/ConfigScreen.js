import * as React from 'react';
import { Text, View } from "react-native";
import { styles } from "../Configuracoes/styles";
import { Appbar, TextInput, Button } from 'react-native-paper';
export const ConfigScreen = ({ navigation }) => {
  const _goBack = () => console.log('Went back')
  const _handleMore = () => console.log('Shown more');
  const [text, setNome] = React.useState("");
  const [text, setEmail] = React.useState("");
  const [text, setText] = React.useState("");

  return (

    <View style={styles.containerConfig}>
      <Appbar.Header style={styles.navConfig}>
        <Appbar.BackAction onPress={_goBack} />
        <Appbar.Content titleStyle={{ textAlign: 'center' }} title="Configurações" />
        <Appbar.Action icon="menu" onPress={_handleMore} />
      </Appbar.Header>
      <Text variant="headlineLarge">Configurações da Conta</Text>
      <TextInput style={styles.inputConfig}
        label="Nome"
        value={text}
        onChangeText={text => setNome(text)}
      />
      <TextInput style={styles.inputConfig}
        label="Email"
        value={text}
        onChangeText={text => setEmail(text)}
      />
      <TextInput style={styles.inputConfig}
        label="Password"
        secureTextEntry
        right={<TextInput.Icon icon="eye" />}
      />
      <Button style={styles.buttonConfig1} mode="outlined" onPress={() => console.log('Pressed')}>
        Salvar alterações
      </Button>
      <Button style={styles.buttonConfig2} mode="outlined" onPress={() => console.log('Pressed')}>
        Deletar conta
      </Button>
      <Text variant="headlineLarge">Termos e Licenças</Text>
      <Button style={styles.buttonConfig3} mode="elevated" onPress={() => console.log('Pressed')}>
        Termos e condições
      </Button>
      <Button style={styles.buttonConfig3} mode="elevated" onPress={() => console.log('Pressed')}>
        Licenças
      </Button> <Button style={styles.buttonConfig3} mode="elevated" onPress={() => console.log('Pressed')}>
        Política de Privacidade
      </Button>

    </View>
  );
};