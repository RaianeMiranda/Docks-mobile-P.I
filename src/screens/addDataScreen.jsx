import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const addData = () => {
  const [nome_livro, setnome_livro] = useState('');
  const [capaLivro, setcapaLivro] = useState('');

  const handleSaveBook = () => {
    // Get a reference to the books node in the Realtime Database
    const booksRef = firebase.database().ref('livros');

    // Generate a unique key for the new book
    const newBookRef = booksRef.push();

    // Upload the image to Firebase Storage
    const storageRef = firebase.storage().ref(`images/${newBookRef.key}`);
    const uploadTask = storageRef.put(capaLivro);

    // Wait for the image to upload and get the download URL
    uploadTask.on('state_changed', null, null, () => {
      uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
        // Save the book data to the Realtime Database
        newBookRef.set({
          cod_book: newBookRef.key,
          name: nome_livro,
          img_book: downloadURL,
        });
      });
    });
  };

  const handleChooseImage = () => {
    ImagePicker.launchImageLibrary(
      { mediaType: 'photo', includeBase64: true },
      (response) => {
        if (response.assets) {
          setBookImage('data:image/png;base64,' + response.assets[0].base64);
        }
      },
    );
  };

  return (
    <View>
      <Text>Book Name:</Text>
      <TextInput
        value={nome_livro}
        onChangeText={(text) => setnome_livro(text)}
      />
      <Text>Book Image:</Text>
      <TextInput
        value={capaLivro}
        onChangeText={(text) => setcapaLivro(text)}
      />
      <Button title="Save Book" onPress={handleSaveBook} />
    </View>
  );
};

export default addData;
