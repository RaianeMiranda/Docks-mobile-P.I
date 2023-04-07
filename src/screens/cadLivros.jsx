import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import {auth, database} from "../config/firebase/firebase"
import ImagePicker from "../screens/ImagePicker";

export const CadastroLivros = () => {
  const [nomeLivro, setNomeLivro] = useState("");
  const [descricao, setDescricao] = useState("");
  const [capaLivro, setCapaLivro] = useState("");

  const handleAdd = async () => {
    try {
      const user = auth.currentUser;
      if (!user) {
        throw new Error("Usuário não autenticado.");
      }

      if (!nomeLivro.trim()) {
        throw new Error("Por favor, insira um nome para o livro.");
      }

      if (!capaLivro) {
        throw new Error("Por favor, selecione uma capa para o livro.");
      }

      const docRef = await addDoc(collection(database, "livros"), {
        nomeLivro: nomeLivro,
        descricao: descricao,
        capaLivro: capaLivro,
        userId: user.uid,
      });

      console.log("Livro adicionado com ID: ", docRef.id);
      setNomeLivro("");
      setDescricao("");
      setCapaLivro("");
    } catch (error) {
      console.error("Erro ao adicionar livro: ", error.message);
    }
  };

  const handleImgURLChange = (url) => {
    setCapaLivro(url);
  };

  return (
    <View>
      <TextInput
        placeholder="Título"
        value={nomeLivro}
        onChangeText={(text) => setNomeLivro(text)}
      />
      <TextInput
        placeholder="Descrição"
        value={descricao}
        onChangeText={(text) => setDescricao(text)}
      />
      <TouchableOpacity onPress={handleAdd} disabled={!nomeLivro.trim() || !capaLivro}>
        <Text style={{ color: !nomeLivro.trim() || !capaLivro ? 'gray' : 'black' }}>Adicionar</Text>
      </TouchableOpacity>
      <ImagePicker onImgURLChange={handleImgURLChange} />
    </View>
  );
};
