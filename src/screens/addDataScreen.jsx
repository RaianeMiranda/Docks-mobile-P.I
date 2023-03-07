import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Picker } from 'react-native';
import connection from '../config/MySql';

export default function AddBook() {
  const [nomeLivro, setNomeLivro] = useState('');
  const [capaLivro, setcapaLivro] = useState('');
  const [idEmail, setIdEmail] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const query = `SELECT idEmail FROM usuarios`;
      const [rows, fields] = await connection.execute(query);
      setUsers(rows);
    }

    getUsers();
  }, []);

  async function addBook() {
    const query = `INSERT INTO books (nomeLivro, capaLivro, idEmail) VALUES (?, ?, ?)`;
    const values = [nomeLivro, capaLivro, idEmail];

    const [rows, fields] = await connection.execute(query, values);
    console.log(rows);
  }

  return (
    <View>
      <Text>Add Book</Text>
      <TextInput
        placeholder="Enter book nomeLivro"
        value={nomeLivro}
        onChangeText={(text) => setNomeLivro(text)}
      />
      <TextInput
        placeholder="Enter capaLivro"
        value={capaLivro}
        onChangeText={(text) => setcapaLivro(text)}
      />
      <Picker
        selectedValue={idEmail}
        onValueChange={(itemValue, itemIndex) => setIdEmail(itemValue)}
      >
        {users.map((user) => (
          <Picker.Item key={user.id} label={user.idEmail} value={user.idEmail} />
        ))}
      </Picker>
      <Button nomeLivro="Add Book" onPress={addBook} />
    </View>
  );
};