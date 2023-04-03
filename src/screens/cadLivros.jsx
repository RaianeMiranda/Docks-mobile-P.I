import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { auth, firestore } from "../config/firebase";

export const CadastroLivros = () => {
  const [nomeLivro, setNomeLivro] = useState("");
  const [descricao, setDescricao] = useState("");

  const handleAdd = async () => {
    try {
      const user = auth.currentUser;
      if (!user) {
        throw new Error("Usuário não autenticado.");
      }

      if (!nomeLivro.trim()) {
        throw new Error("Por favor, insira um nome para o livro.");
      }

      const docRef = await addDoc(collection(firestore, "livros"), {
        nomeLivro: nomeLivro,
        descricao: descricao,
        userId: user.uid,
      });

      console.log("Livro adicionado com ID: ", docRef.id);
      setNomeLivro("");
      setDescricao("");
    } catch (error) {
      console.error("Erro ao adicionar livro: ", error.message);
    }
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
      <TouchableOpacity onPress={handleAdd} disabled={!nomeLivro.trim()}>
        <Text style={{ color: !nomeLivro.trim() ? 'gray' : 'black' }}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
};
