import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import connection from '../config/MySql';

export default function Login({ navigation }) {
  const [idEmail, setIdEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function loginUser() {
    const query = `SELECT * FROM usuarios WHERE idEmail = ? AND senha = ?`;
    const values = [idEmail, senha];

    const [rows, fields] = await connection.execute(query, values);
    if (rows.length > 0) {
      console.log(`Welcome ${rows[0].idEmail}!`);
      navigation.navigate('Home');
    } else {
      console.error('Invalid credentials');
    }
  }

  function handleLogin() {
    loginUser().catch((error) => {
      console.error(`Error logging in: ${error}`);
    });
  }

  return (
    <View>
      <Text>Login</Text>
      <TextInput
        placeholder="Enter idEmail"
        value={idEmail}
        onChangeText={(text) => setIdEmail(text)}
      />
      <TextInput
        placeholder="Enter senha"
        value={senha}
        secureTextEntry={true}
        onChangeText={(text) => setSenha(text)}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
