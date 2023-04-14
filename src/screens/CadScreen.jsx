import React, { useState } from "react";
import { TouchableOpacity, Text, View, Image } from "react-native";
import { Button, HelperText, Paragraph, TextInput } from "react-native-paper";
import { auth } from "../config/firebase";
import { styles } from "../config/styles";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const CadScreen = ({ navigation }) => {
  const [mostraErro, setMostraErro] = useState("");
  const [nome, setNome] = useState({
    value: "",
    error: "",
  });
  const [email, setEmail] = useState({
    value: "",
    error: "",
  });
  const [password, setPassword] = useState({
    value: "",
    error: "",
  });
  const [confirmaPassword, setConfirmaPassword] = useState({
    value: "",
    error: "",
  });

  function onRegisterPressed() {
    console.log("RegistroIniciado");
    let erro = false;
    if (nome.value === "") {
      setNome({ ...nome, error: "Entre com o seu nome maravilhoso" });
      erro = true;
    }
    if (email.value === "") {
      setEmail({ ...email, error: "Entre com um e-mail válido" });
      erro = true;
    }
    if (password.value === "") {
      setPassword({ ...password, error: "Entre com uma senha" });
      erro = true;
    }
    if (confirmaPassword.value === "") {
      setConfirmaPassword({
        ...confirmaPassword,
        error: "Repita sua senha",
      });
      erro = true;
    }
    if (confirmaPassword.value != password.value) {
      erro = true;
      setConfirmaPassword({
        ...confirmaPassword,
        error: "Senhas não conferem",
      });
    }
    if (!erro) {
      createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((value) => {
          console.log("Cadastrado com sucesso! " + value.user.uid);
          navigation.navigate("Inicial", {
            mensagem: "Você se registrou com muito sucesso! 💋",
          });
        })
        .catch((error) => lidarComErro(error.code));
    }
  }

  function lidarComErro(erro) {
    if (erro == "auth/weak-password") {
      setMostraErro("Senha muito Fraquinha");
      return;
    }
    if (erro == "auth/credential-already-in-use") {
      setMostraErro("E-mail já cadastrado");
      return;
    }
    if (erro == "auth/invalid-email") {
      setMostraErro("E-mail inválido");
      return;
    }
    setMostraErro(erro);
  }

  return (
    <View style={styles.container}>
        <View style={styles.cad}>
            <Image
              source={{ uri: require("/assets/images/logodocks.png") }} 
              style={styles.imagedocks}
            />
            <Paragraph style={styles.paragraphbv}>Bem vindo(a) ao</Paragraph> <Paragraph style={styles.paragraphbv1}>Docks</Paragraph>
      <Text style={styles.textbv}>Aqui é o lugar para as</Text> <Text style={styles.textbv1}> suas histórias </Text>
      <HelperText type="error">{mostraErro}</HelperText>
      <TextInput 
        label="Nome Completo"
        value={nome.value}
        onChangeText={(text) => setNome({ value: text, error: "" })}
        error={!!nome.error}
        errorText={nome.error}
        style={styles.input}
        /* não essenciais  */
        returnKeyType="next"
        textContentType="givenName"
        keyboardType="default"
      />
      <HelperText type="error" visible={!!nome.error}>
        {nome.error}
      </HelperText>
      <TextInput
        label="Digite seu E-mail"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: "" })}
        error={!!email.error}
        errorText={email.error}
        style={styles.input}
        /* não essenciais  */
        returnKeyType="next"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <HelperText type="error" visible={!!email.error}>
        {email.error}
      </HelperText>
      <TextInput
        label="Senha"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: "" })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
        style={styles.input}
      />
      <HelperText type="error" visible={!!password.error}>
        {password.error}
      </HelperText>
      <TextInput
        label="Confirme sua Senha"
        returnKeyType="done"
        value={confirmaPassword.value}
        onChangeText={(text) => setConfirmaPassword({ value: text, error: "" })}
        error={!!confirmaPassword.error}
        errorText={confirmaPassword.error}
        secureTextEntry
        style={styles.input}
      />
      <HelperText type="error" visible={!!confirmaPassword.error}>
        {confirmaPassword.error}
      </HelperText>
     
      <Button style={styles.buttoncontinuar} mode="contained" onPress={onRegisterPressed} >
       <Text style={{color:"black"}}> Continuar</Text>
      </Button>
     
      <Button style={styles.buttoncadface}>
        <View style={styles.imagetextface}>
        <Image style={styles.imageface}
        source={{ uri: require("/assets/images/facedocks.png") }}/>
       <Text style={styles.textcadface}> Cadastre-se com o Facebook </Text>
       </View>
      </Button>
    
      <View>
      <Button style={styles.buttoncadgoogle} mode="contained">
        <View style={styles.imagetextgoogle}>
      <Image style={styles.imagegoogle}
        source={{ uri: require("/assets/images/googledocks2.png") }}/>
        <Text style={styles.textcadface}>Cadastre-se com o Google </Text>
        </View>
      </Button>
      </View>
      <View style={styles.esqueceuSenha}>
       
        <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
          <Text style={styles.logindocks}>Já membro? Entrar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.esqueceuSenha}>
       
        <TouchableOpacity onPress={() => navigation.navigate("CKeditor")}>
          <Text style={styles.logindocks}>Criação de Personagens</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("CriacaoMundos")}>
          <Text style={styles.logindocks}>Criação de Mundos</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("SnowflakeCK")}>
          <Text style={styles.logindocks}>Snowflake</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("CapitulosCKScreen")}>
          <Text style={styles.logindocks}>Capítulos</Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  );
};