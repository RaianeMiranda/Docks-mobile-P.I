import { Image, View } from "react-native"
import { Button, Text, TextInput } from "react-native-paper"
import { useEffect, useState } from "react"
import { addDoc, collection, deleteDoc, doc, onSnapshot, updateDoc } from "firebase/firestore"
import { database } from "../config/firebase/firebase"
import { ScrollView } from "react-native-web"
import ImagePicker from "../screens/ImagePicker";

export const Biblioteca = () => {
  const [nomeLivro, setNomeLivro] = useState('');
  const [descricao, setDescricao] = useState('');
  const [capaLivro, setCapaLivro] = useState(null); // New state variable
  const [livro, setLivro] = useState([]);

  useEffect(() => {
    // onSnapshot é responsável por escutar as alterações na coleção
    const unsubscribe = onSnapshot(
      // Primeiro parâmetro é a coleção que é a origem dos dados
      collection(database, "livros"),
      // Segundo parâmetro é os dados que serão inseridos
      (querySnapshot) => {
        // livroTemp neste caso é um array temporário
        const livroTemp = []
        // forEach é um método do array que percorre cada item do array
        // neste caso o item é o doc que é um objeto com os dados do 
        querySnapshot.forEach((doc) => {
          livroTemp.push({
            // ...doc.data() é um operador que recebe todos os dados do objeto pare serem concatenados com outro valor de objeto
            ...doc.data(),
            // id é um campo que não existe no objeto doc.data()
            // por isso é necessário criar um campo id para o objeto
            id: doc.id
          })
        })
        // setLivro é o método que atualiza o estado do array livro
        setLivro(livroTemp)
      }
    )
    // componentDidUnmount o componete saiu de cena
    // unsubscribe é o método que cancela a escuta da coleção
    // para evitar que o componente fique escutando a coleção mesmo que ele não esteja em cena
    // o retorno da função useEffect é o componentDidUnmount

    return () => unsubscribe()
  }, [])
  async function handleRegister() {
    // inicializa o banco de dados
    // addDoc é responsável pela inserção do dado em uma coleção "Tabela"
    const docRef = await addDoc(
      collection(database, "livros"),
      {
        nomeLivro: nomeLivro,
        descricao: descricao,
        capaLivro: capaLivro
      }
    ).then((docRef) => {
      console.log("Id do usuário: ", docRef.id)
      setNomeLivro('')
      setDescricao('')
      setCapaLivro('')
    })
  }

  function handleExcluir(livro) {
    // deleteDoc é responsável pela exclusão do dado em uma coleção "Tabela"

    deleteDoc(
      doc(database, "livros", livro.id)
    ).then(() => {
      console.log("Usuário excluído com sucesso")
    })
  }

  function handleEditar(livro) {
    setLivro(livro)
    setNomeLivro(livro.nomeLivro)
    setDescricao(livro.descricao)
    setCapaLivro(livro.capaLivro)
  }

  function handleUpdate() {
    updateDoc(doc(database, "livros", livro.id), {
      nomeLivro: nomeLivro,
      descricao: descricao,
      capaLivro: capaLivro
    }).then(() => {
      console.log("Livro atualizado com sucesso")
      setNomeLivro('')
      setDescricao('')
      setCapaLivro('')
    })
  }
  const handleImgURLChange = (url) => {
    setCapaLivro(url);
  };
  return (
    <View>
      <Text>Cadastro do Usuário</Text>
      <ScrollView>
        {
          // map é um método do array que percorre cada item do array
          // neste caso o item é o livro que é um objeto com os dados do usuário
          // o retorno do map é um array de componentes do React
          Array.isArray(livro) && livro.map((livro) => (
            // key é um atributo obrigatório do React
            <View key={livro.id}>
              {/* Display book cover image */}
              <Image source={{ uri: livro.capaLivro }} style={{ width: 100, height: 100 }} />
              <Text>{livro.nomeLivro}</Text>
              <Text>{livro.descricao}</Text>
              <Button onPress={() => handleEditar(livro)}>Editar</Button>
              <Button onPress={() => handleExcluir(livro)}>Excluir</Button>
            </View>
          ))
        }
      </ScrollView>

      {livro && (
        <View>
          <TextInput
            label="nomeLivro"
            mode="outlined"
            value={nomeLivro}
            onChangeText={setNomeLivro}
          />
          <TextInput
            label="descricao"
            mode="outlined"
            value={descricao}
            onChangeText={setDescricao}
          />
          <ImagePicker onImgURLChange={handleImgURLChange} />
          <Button mode="contained" onPress={handleUpdate}>Atualizar Usuário</Button>
        </View>
      )}
    </View>
  );
};


