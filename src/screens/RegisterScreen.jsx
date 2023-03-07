import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import connection from '../config/connections'

export default function Register({ navigation }) {
  const [username, setUsername] = useState('');
  const [idEmail, setIdEmail] = useState('');
  const [password, setPassword] = useState('');

  async function registerUser() {
    const query = `INSERT INTO users (nome, idEmail, senha, administrador) VALUES (?, ?, ?)`;
    const values = [nome, idEmail, senha, administrador];

    const [rows, fields] = await connection.execute(query, values);
    console.log(rows);
  }

  function handleRegister() {
    registerUser()
      .then(() => {
        console.log('User registered successfully');
        navigation.navigate('Login');
      })
      .catch((error) => {
        console.error(`Error registering user: ${error}`);
      });
  }

  return (
    <View>
      <Text>Register</Text>
      <TextInput
        placeholder="Enter username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        placeholder="Enter Email"
        value={idEmail}
        onChangeText={(text) => setIdEmail(text)}
      />
      <TextInput
        placeholder="Enter password"
        value={password}
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
}
