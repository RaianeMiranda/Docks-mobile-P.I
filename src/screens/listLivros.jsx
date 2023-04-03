import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { collection, getDocs, query, where } from "firebase/firestore";
import { auth, firestore } from "../config/firebase/firebase";

export const ListaLivros = () => {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    const getLivros = async () => {
      try {
        const user = auth.currentUser;
        if (!user) {
          throw new Error("Usuário não autenticado.");
        }

        // Build a Firestore query to get all books for the current user
        const q = query(
          collection(firestore, "livros"),
          where("userId", "==", user.uid)
        );

        // Get the documents returned by the query
        const querySnapshot = await getDocs(q);

        // Map the documents to an array of book objects
        const livrosList = querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            nomeLivro: doc.data().nomeLivro,
            descricao: doc.data().descricao,
          };
        });

        // Set the list of books as the component state
        setLivros(livrosList);
      } catch (error) {
        console.error("Erro ao obter livros: ", error.message);
      }
    };

    // Call the function to get the list of books when the component mounts
    getLivros();
  }, []);

  // Render function for each book item in the FlatList
  const renderItem = ({ item }) => (
    <View style={styles.tableRow}>
      <Text style={styles.tableCell}>{item.nomeLivro}</Text>
      <Text style={styles.tableCell}>{item.descricao}</Text>
    </View>
  );

  // Render the list of books in a table format
  return (
    <View style={styles.table}>
      {/* Table header */}
      <View style={styles.tableHeader}>
        <Text style={styles.headerCell}>Nome do livro</Text>
        <Text style={styles.headerCell}>Descrição</Text>
      </View>
      {/* List of books */}
      <FlatList
        data={livros}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

// Styles for the table
const styles = StyleSheet.create({
  table: {
    borderWidth: 1,
    borderColor: "gray",
    margin: 10,
    borderRadius: 5,
    overflow: "hidden",
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "lightgray",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  headerCell: {
    flex: 1,
    fontWeight: "bold",
    textAlign: "center",
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  tableCell: {
    flex: 1,
    textAlign: "center",
  },
});
