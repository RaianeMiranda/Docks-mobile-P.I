import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerConfig: {
    backgroundColor: "#FFF2D8",
    height: '100%'
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
  justifyContent:'space-evenly',
  alignItens:'center',
  marginTop:'20px'
},
button1:{
  backgroundColor:'#D5ECB6',
  border:"3px solid #44712F"
  
},
button2:{
  backgroundColor:'#E08181',
  border: "3px solid #C63F3F",
  
},
textSal:{
  fontFamily: "sansSerif",
  fontWeight: "bold",
  color:'black'
},
textDel:{
  fontFamily: "sansSerif",
  fontWeight: "bold",
 color:'black'
}
});

