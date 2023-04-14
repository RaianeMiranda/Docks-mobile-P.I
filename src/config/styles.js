import { StyleSheet } from "react-native";
import { shouldUseActivityState } from "react-native-screens";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "380px",
    paddingHorizontal: 26,
    flex: 1,
    backgroundColor: "#FFF2D8",
    justifyContent: "center",
    fontFamily: "Open Sans",

  },
  cad: {
    backgroundColor: "white",
    paddingRight: '40px',
    paddingLeft: '40px',
    paddingTop: '40px',
    borderRadius: '35px',

  },
  imagedocks: {
    width: '80px',
    height: '80px',
    margin: "auto",
  },
  paragraphbv: {
    fontWeight: "bold",
    margin: "auto",
    fontSize: '23px',

  },
  paragraphbv1: {
    fontWeight: "bold",
    margin: "auto",
    marginTop: '0px',
    fontSize: '23px',
  },
  textbv: {
    margin: "auto",
  },
  textbv1: {
    margin: "auto",
    marginTop: '0px',
  },
  buttoncontinuar: {
    backgroundColor: "#F6EB60",
    borderRadius: "10px",
    width: "140px",
    margin: "auto",
    marginBottom: "15px",
  },

  esqueceuSenha: {
    // alignItems: "flex-end",
    alignSelf: "stretch",
    marginBottom: 24,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  input: {
    alignSelf: "stretch",
    backgroundColor: "white",
    border: '5px solid',
    borderColor: "#EDEDED",
    underline: "none",
    fontSize: "10px",
    borderTopRightRadius: "10px",
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "10px",
    height: "40px",
  },
  buttoncadface: {
    backgroundColor: "transparent",
    borderRadius: "5px",
    border: '5px solid #EDEDED',
    height: "60px",
    width: "250px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    marginBottom: "5px",


  },
  textcadface: {
    color: "black",
    fontFamily: "Open Sans",
    margin: "auto",
    fontSize: "12px",
    marginLeft: "2px",

  },

  buttoncadgoogle: {
    backgroundColor: "transparent",
    borderRadius: "5px",
    border: '5px solid #EDEDED',
    height: "60px",
    width: "250px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
  },
  imageface: {
    width: "30px",
    height: "30px",
    marginLeft: "0px",
    marginBottom: "1px",
  },
  imagegoogle: {
    width: "40px",
    height: "40px",
    marginLeft: "0px",
    marginBottom: "0px",
  },
  label: {
    color: "black",
  },
  logindocks: {
    margin: "auto",
  },

  link: {
    fontWeight: "bold",
    color: "black",
  },
  imagetextgoogle: {
    display: "flex",
  },
  ////Login
  containerlogin1: {
    backgroundColor: "white",
    paddingRight: '40px',
    paddingLeft: '40px',
    paddingTop: '40px',
    paddingBottom: '100px',
    borderRadius: '35px',
  },
  containerlogin: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 26,
    flex: 1,
    backgroundColor: "#FFF2D8",
    justifyContent: "center",
    fontFamily: "Open Sans",
  },
  buttoncontinuar1: {
    marginTop: "7px",
    backgroundColor: "#F6EB60",
    borderRadius: "10px",
    width: "140px",
    margin: "auto",

  },
  buttoncadgoogle1: {
    backgroundColor: "transparent",
    borderRadius: "5px",
    border: '5px solid #EDEDED',
    height: "60px",
    width: "250px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    marginTop: "5px",
  },
  buttoncadface1: {
    backgroundColor: "transparent",
    borderRadius: "5px",
    border: '5px solid #EDEDED',
    height: "60px",
    width: "250px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    marginBottom: "5px",
    marginTop: "5px",
  },
  imagetextgoogle: {
    display: "flex",
    flexDirection: "row",
  },
  imagetextface: {
    display: "flex",
    flexDirection: "row",
  },
  //CKeditor
  navConfig: {
    backgroundColor: "#D5ECB4",
  },
  containercriacaoper: {
    backgroundColor: "#FFF2D8",
  },
  linha: {
    height: 10, width: '100%',
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
  buttonper: {
    backgroundColor: "#E9DAF7",
    height: "35px",
    width: "91px",
    borderRadius: "0px",
    border: "1px solid #D9D9D9",
    color: "black",
    justifyContent: "center",

  },
  containersalvarper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: "20px",
  },
  linhafinal: {
    height: "7",
    width: "100%",
  },
  iconinfo: {
    fontSize: "24px",
    marginLeft: "auto",
  },
  //Modal
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
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
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonclose: {
    fontSize: "24px",
    marginLeft: "auto",
  },

  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
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
  //CapitulosScreen
  capitulosparagraph: {
    fontWeight: "bolder",
    fontSize: "25px",
    marginTop: "15px",
    marginLeft: "30px",
  },
  buttoncapitulos: {
    border: "3px solid #F1C4A5",
    borderRadius: "0px",
    height: "50px",
    width: "260px",
    marginTop: "13px",
    marginLeft: "32px",
    display: "flex",
    flexDirection: "row",
    alignItems:"center"
  },
  capitulostext: {
    color:"black",
    marginTop: "12px",
  },
  capitulosub:{
    height:"3px", 
    width:"3px", 
    color:"black",
    marginBottom:"2px",
    fontSize: "12px",
  },
  viewcapitulos:{
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  imagelixeira:{
    width:"15px", 
    height:"15px", 
    marginLeft:"160px"
  }, 
  buttonadicionar:{
    border: "3px solid #F1C4A5",
    borderRadius: "0px",
    height: "50px",
    width: "260px",
  },
  buttonadicionar:{
    border: "3px solid #F1C4A5",
    borderRadius: "0px",
    height: "40px",
    width: "200px",
    marginLeft: "32px",
    display: "flex",
    marginTop:10,
    flexDirection: "row",
    alignItems:"center", 
    justifyContent:"center",
    backgroundColor:"#FFA974",
  },
  textadicionar:{
    color:"black",
  },
  iconplus:{
    fontSize:"30px",
    color:"black"
  },
  containerplustext:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center"
  },

header: {
    color: "#222",
    backgroundColor: "#2250",
    fontSize: 14,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 20

},
body: {
    color: "#222",
    fontSize: 14,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20
}
});




export const colors =
  ["rgba(190,228,228,1)",
    "rgba(190,228,228,1)",
    "rgba(242,204,201,1)",
    "rgba(242,204,201,1)",
    "rgba(235,222,240,1)",
    "rgba(235,222,240,1)",
    "rgba(239,196,167,1)",
    "rgba(239,196,167,1)", "rgba(239,196,167,1)", "rgba(190,228,228,1)", "rgba(190,228,228,1)", "rgba(242,204,201,1)", "rgba(242,204,201,1)", "rgba(235,222,240,1)", "rgba(235,222,240,1)", "rgba(239,196,167,1)", "rgba(239,196,167,1)", "rgba(190,228,228,1)", "rgba(190,228,228,1)", "rgba(242,204,201,1)", "rgba(242,204,201,1)",];

export const locations = [0, 0.1, 0.1, 0.2, 0.2, 0.3, 0.3, 0.3, 0.4, 0.4, 0.5, 0.5, 0.6, 0.6, 0.7, 0.7, 0.8, 0.8, 0.9, 0.9, 1, 1,];