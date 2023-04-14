
import { LinearGradient } from "expo-linear-gradient";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { TouchableOpacity, Text, View, Image } from "react-native";
import {
    Button,
    Dialog,
    HelperText,
    Paragraph,
    Portal,
    TextInput,
} from "react-native-paper";
import { auth } from "../config/firebase";
import { colors, locations, styles } from "../config/styles";

export const LoginScreen = ({ route, navigation }) => {
    const [email, setEmail] = useState({
      value: "",
      error: "",
    });
    const [password, setPassword] = useState({
      value: "",
      error: "",
    });
    const [mostraErro, setMostraErro] = useState("");
    const { mensagem } = route.params || false;
  
    function onLoginPressed() {
      console.log("LoginIniciado");
      if (email.value === "" || password.value === "") {
        setEmail({ ...email, error: "Entre com um e-mail válido" });
        setPassword({ ...password, error: "Entre com uma senha" });
        return;
      }
      signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
          const user = userCredential.user;
          navigation.navigate("HomeNavigation");
        })
        .catch((error) => {
          lidarComErro(error.code);
        });
    }
    return (
        
        <View style={styles.containerlogin}>
             <View>
      <LinearGradient
        // Background Linear Gradient 
          start={{ x: 0, y: 0 }} 
          end={{ x: 1, y: 0 }} 
          colors={colors} 
          locations={locations} 
          style={{ height: 7, width: "100%" }} 
          />
      </View>
            <View style={styles.containerlogin1}>
                <Image
                    source={{ uri: require("/assets/images/logodocks.png") }}
                    style={styles.imagedocks}
                />
                <Paragraph style={styles.paragraphbv}>Bem vindo(a) ao</Paragraph> <Paragraph style={styles.paragraphbv1}>Docks</Paragraph>
                <Text style={styles.textbv}>Aqui é o lugar para as</Text> <Text style={styles.textbv1}> suas histórias </Text>
                {mensagem && <HelperText type="info">{mensagem}</HelperText>}
                <HelperText type="error">{mostraErro}</HelperText>
                <TextInput
                    label="E-mail" 
                    value={email.value}
                    onChangeText={(text) => setEmail({ value: text, error: "" })}
                    error={!!email.error}
                    errorText={email.error}
                    style={styles.input}
                    /* não essenciais<3 */
                    returnKeyType="next"
                    autoCompleteType="email"
                    textContentType="emailAddress"
                    keyboardAppearance="email-address"
                />
                <HelperText visible={!!email.error}>{email.error}</HelperText>
                <TextInput
                    label="Senha"
                    returnKeyType="done"
                    value={password.value}
                    onSelectionChange={(text) => setPassword({ value: text, error: "" })}
                    error={!!password.error}
                    errorText={password.error}
                    secureTextEntry
                    style={styles.input}
                />
                <Button style={styles.buttoncontinuar1} mode="contained" onPress={onLoginPressed} >
                    <Text style={{color:"black"}}>Continuar</Text>
                </Button>
                <Text style={{margin:"auto"}}>OU</Text>
                <Button style={styles.buttoncadface1}>
                    <View style={styles.imagetextface}>
                    <Image style={styles.imageface}
                        source={{ uri: require("/assets/images/facedocks.png") }} />
                    <Text style={styles.textcadface}>Cadastre-se com o Facebook </Text>
                    </View>
                </Button>

                <View>
                    <Button style={styles.buttoncadgoogle} mode="contained">
                        <View style={styles.imagetextgoogle}>
                        <Image style={styles.imagegoogle}
                            source={{ uri: require("/assets/images/logogoogle.png") }} />
                        <Text style={styles.textcadface}>Cadastre-se com o Google </Text>
                    </View>
                    </Button>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Não possui uma conta? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("CadScreen")}>
                        <Text style={styles.link}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
      <LinearGradient
        // Background Linear Gradient 
          start={{ x: 0, y: 0 }} 
          end={{ x: 1, y: 0 }} 
          colors={colors} 
          locations={locations} 
          style={{ height: 7, width: "100%", marginTop:"348px" }} 
          />
      </View>
        </View>
       
    );
};
