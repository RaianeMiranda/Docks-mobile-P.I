import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import firebase from '../config/firebase/firebase';

const UpdateUser = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const handleUpdate = () => {
    const user = firebase.auth().currentUser;

    if (name) {
      user.updateProfile({ displayName: name })
        .then(() => {
          setName('');
          setErrorMessage(null);
        })
        .catch(error => setErrorMessage(error.message));
    }

    if (password) {
      user.updatePassword(password)
        .then(() => {
          setPassword('');
          setErrorMessage(null);
        })
        .catch(error => setErrorMessage(error.message));
    }
  }

  console.log(name, password)

  return (
    <View>
      <Text>Update Your Information</Text>
      {errorMessage && <Text style={{ color: 'red' }}>{errorMessage}</Text>}
      <TextInput
        placeholder="New Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="New Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button
        title="Update"
        onPress={handleUpdate}
      />
    </View>
  );
}

export default UpdateUser;
