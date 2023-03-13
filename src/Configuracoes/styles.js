import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerConfig: {
    backgroundColor: "#FFF2D8",
  },
  navConfig: {
    backgroundColor: "#D5ECB4",
  },
  inputConfigNome: {
    backgroundColor: "white",
    width: "330px",
    marginLeft: "15px",
    borderTopRightRadius: "20px",
    borderTopLeftRadius: "20px",
  },
  inputConfigEmail: {
    backgroundColor: "white",
    width: "330px",
    marginLeft: "15px",
  },
  inputConfigSenha: {
    backgroundColor: "white",
    width: "330px",
    borderBottomStartRadius: "20px",
    borderBottomEndRadius: "20px",
    marginLeft: "15px",
  },

  buttonConfigSalvar: {

    backgroundcolor: "#D5ECB",
    marginTop: "30px",
    width: "100px",
    textColor: "black",
    height: "50px",

    marginLeft: "30px",
    backgroundColor: "#D5ECB4",
    width: "100px",
    border: "3px solid #44712F",

  },
  buttonConfigDeletar: {
    width: "170px",
    backgroundColor: "#E08181",
    width: "100px",
    marginTop: "30px",
    textColor: "black",
    height: "50px",

    border: "3px solid #C63F3F",
  },
  textDeletar: {
    fontSize: "15px",
    fontFamily: "sansSerif",
    fontWeight: "bold",
    color: "black",
  },
  textSalvar: {
    fontSize: "15px",

    fontFamily: "sansSerif",
    fontWeight: "bold",
    color: "black",
  },
  textTermos: {
    fontSize: "15px",
    fontFamily: "sansSerif",
    color: "black",
    marginRight: "220px",
  },
  textLicencas: {
    fontSize: "15px",
    fontFamily: "sansSerif",
    color: "black",
    marginRight: "220px",
  },
  tituloConfig1: {
    fontFamily: "sansSerif",
    marginLeft: "40px",
    marginTop: "30px",
    marginBottom: "10px",
    fontWeight: "bold",
    fontSize:'20px'
  },
  buttonConfigTermos: {
    backgroundColor: "#F1C4A5",
    marginLeft: "20px",
    width: "240px",
    marginTop: "15px",
    borderRadius: "15px",
  },

  buttonSalvar:{
    backgroundColor: "#D5ECB4",
    border: "3px solid #44712F",
  },
buttons:{
  flex:'1',
  flexDirection:'row',
  justifyContent:'center',
  alignItens:'center'
},
button1:{
  backgroundColor:'green'
},
button2:{
  backgroundColor:'red'
}
});

