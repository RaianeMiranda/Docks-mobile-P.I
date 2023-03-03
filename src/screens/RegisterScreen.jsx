import React, { useState } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { Button, HelperText, TextInput } from "react-native-paper";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const RegisterScreen = ({ navigation }) => {
  const [mostraErro, setMostraErro] = useState("");
  const [nome, setNome] = useState({
    value: "",
    error: "",
  });
  const [email, setEmail] = useState({
    value: "",
    error: "",
  });
  const [password, setpassword] = useState({
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
      setpassword({ ...password, error: "Entre com uma password" });
      erro = true;
    }
    if (confirmaPassword.value === "") {
      setConfirmaPassword({
        ...confirmaPassword,
        error: "Repita sua password",
      });
      erro = true;
    }
    if (confirmaPassword.value != password.value) {
      erro = true;
      setConfirmaPassword({
        ...confirmaPassword,
        error: "passwords não conferem",
      });
    }
    if (!erro) {
      createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((value) => {
          console.log("Cadastrado com sucesso! " + value.user.uid);
          navigation.navigate("LoginScreen", {
            mensagem: "Você se registrou com muito sucesso!",
          });
        })
        .catch((error) => lidarComErro(error.code));
    }
  }

  function lidarComErro(erro) {
    if (erro == "auth/weak-password") {
      setMostraErro("password muito Fraquinha");
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
    <View>
      <Text>Cadastro</Text>
      <HelperText type="error">{mostraErro}</HelperText>
      <TextInput
        label="Nome Completo"
        value={nome.value}
        onChangeText={(text) => setNome({ value: text, error: "" })}
        error={!!nome.error}
        errorText={nome.error}
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
        label="password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setpassword({ value: text, error: "" })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <HelperText type="error" visible={!!password.error}>
        {password.error}
      </HelperText>
      <TextInput
        label="Confirme sua password"
        returnKeyType="done"
        value={confirmaPassword.value}
        onChangeText={(text) => setConfirmaPassword({ value: text, error: "" })}
        error={!!confirmaPassword.error}
        errorText={confirmaPassword.error}
        secureTextEntry
      />
      <HelperText type="error" visible={!!confirmaPassword.error}>
        {confirmaPassword.error}
      </HelperText>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("LoginScreen")}
        >
          <Text>Esqueceu sua password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
          <Text>Fazer login</Text>
        </TouchableOpacity>
      </View>
      <Button mode="contained" onPress={onRegisterPressed} >
        Cadastrar
      </Button>
    </View>
  );
};