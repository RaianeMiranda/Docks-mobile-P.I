import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF2D8",
    fontFamily: "Open Sans",

  },
  containerConfig: {
    backgroundColor: "#FFF2D8",
    height: "100%",
  },
  cards: {
    wrapper: {},
    slide: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#FFF",
    },
    text: {
      color: "#000",
      fontSize: 30,
      fontWeight: "bold",
    },
  },

  containerBiblio: {
    backgroundColor: "#FFF2D8",
  },


  buttonCL: {
    border: "5px solid #FED576",
    borderRadius: "8px",
    width: "180px",
    height: "40px",
    marginTop: "20px",
    marginLeft: "30px",
    marginBottom: "5PX",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  textBL: {
    fontWeight: "bold",
    color: "black",
    fontSize: "15PX",
  },

  LivroB: {
    height: "150PX",
    width: "130PX",
  },


  //BIBLIOmodal
  modalBiblio1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "0px",
  },
  TituloFecharModal: {
    flex: "1",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  CriarLivros: {
    fontWeight: "bold",
    fontSize: "25px",
    marginBottom: "10px",
  },
  FecharModal: {
    height: "15px",
    width: "15px",
  },
  LivroColorido: {
    width: "130px",
    height: "180px",
  },
  MaisDoLivro: {
    width: "80px",
    height: "100px",
    marginTop: "30px",
  },
  TituloTitulo: {
    fontSize: "25px",
    marginTop: "20px",
    marginLeft: "20px",
  },
  NomeDoLivro: {
    width: "180px",
    height: "30px",
    backgroundColor: "#F4CCC8",
    border: " solid #D7C3C1",
    borderTopRightRadius: "0",
    borderTopLeftRadius: "0",
    marginLeft: "20px",
  },
  ButtonSalvarBiblio: {
    border: "3px solid #D9D9D9",
    backgroundColor: "#D5ECB6",
    width: "50px",
    borderRadius: "Opx",
    height: "30PX",
    marginTop: "15px",
    marginLeft: "135px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  TextButtonSalvarBiblio: {
    fontWeight: "bold",
    fontSize: "15px",
  },


  //////////////////////////////////////////////////////////////////////////////
  navConfig: {
    backgroundColor: "#D5ECB4",
  },
  containercriacaoper: {
    backgroundColor: "#FFF2D8",
  },
  paragraphper: {
    fontWeight: "bolder",
    marginRight: "10px",
    marginLeft: "10px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  containernomeper: {
    marginTop: "15px",
    marginBottom: "10px",
    display: "flex",
  },
  inputper: {
    backgroundColor: "white",
    width: "90px",
    height: "20px",
    marginLeft: "10px",
    borderRadius: "0px",
  },


  containersalvarper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: "20px",
  },

  //modal
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  containermodal: {
    display: "flex",
    flexDirection: "row",
  },

  modalView: {
    margin: "auto",
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    }
  },
  buttonclose: {
    fontSize: "24px",
    marginLeft: "auto",
  },
  modalText: {

    textAlign: 'start',
  },
  modalText2: {
    marginRight: "auto",
  },
  modalText3: {
    marginTop: "10px",
    marginBottom: "10px",
    fontWeight: "bold"
  },
  modalText4: {
    marginRight: "auto",
    marginBottom: "10px",
    marginTop: "10px",
  },
  modalText5: {
    marginBottom: "10px",
    fontWeight: "bold",
  },
  modalText6: {
    fontWeight: "bold",
  },
  iconinfo: {
    fontSize: "24px",
    marginLeft: "auto",
    marginTop: "15px",
  },
  containermodal: {
    display: "flex",
    flexDirection: "row",
  },

});




export const colors = [
  "rgba(190,228,228,1)",
  "rgba(190,228,228,1)",
  "rgba(242,204,201,1)",
  "rgba(242,204,201,1)",
  "rgba(235,222,240,1)",
  "rgba(235,222,240,1)",
  "rgba(239,196,167,1)",
  "rgba(239,196,167,1)",
  "rgba(239,196,167,1)",
  "rgba(190,228,228,1)",
  "rgba(190,228,228,1)",
  "rgba(242,204,201,1)",
  "rgba(242,204,201,1)",
  "rgba(235,222,240,1)",
  "rgba(235,222,240,1)",
  "rgba(239,196,167,1)",
  "rgba(239,196,167,1)",
  "rgba(190,228,228,1)",
  "rgba(190,228,228,1)",
  "rgba(242,204,201,1)",
  "rgba(242,204,201,1)",
];

export const locations = [
  0, 0.1, 0.1, 0.2, 0.2, 0.3, 0.3, 0.3, 0.4, 0.4, 0.5, 0.5, 0.6, 0.6,
  0.7, 0.7, 0.8, 0.8, 0.9, 0.9, 1, 1,];