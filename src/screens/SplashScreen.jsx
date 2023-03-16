import { Image, ImageBase, Text, View } from "react-native";
import { Paragraph } from "react-native-paper";
import { styles } from "../utils/styles";

export default function SplashScreen () {
    return(
  <View style={styles.containersobre}>
       <View style={{display:"flex",flexDirection: "row", alignItems: "center", justifyContent: "center",}}>
<Image source={{uri: require("../images/dockinha.png")}}
       style={styles.logodocks}/>
       </View>
    <View>
    <Text style={styles.textdocks}>DOCKS</Text>

    <Text style={styles.textdocks}>Versão: 2.0</Text>
    </View>
    <Text style={styles.textversion}>Sobre o Docks</Text>
<Paragraph>  O Docks é uma plataforma de aprendizagem, que foi criado por leitoras com o objetivo de suprir a carência de aplicativos na área da escrita. </Paragraph>
 <Paragraph>  O site proporciona a aprendizagem do método de escrita, o Snowflake e outros recursos como: Criação de Mundos, Personagens e o roteiro da Jornada do Herói. Além das atividades diárias para o aumento da criatividade.</Paragraph>
<Paragraph>   O objetivo final é a criação de um livro bem estruturado, completo e sem furos. Os escritores iniciantes são a nossa principal motivação, já que são pessoas independentes e sem auxílio algum, que através do Docks desenvolvem melhor a escrita e estrutura de seus livros, possibilitando assim o crescimento de escritores na literatura nacional.  </Paragraph>
<Paragraph>   O Docks é uma plataforma de aprendizagem, que foi criado por leitoras com o objetivo de suprir a carência de aplicativos na área da escrita. 
   O site proporciona a aprendizagem do método de escrita, o Snowflake e outros recursos como: Criação de Mundos, Personagens e o roteiro da Jornada do Herói. Além das atividades diárias para o aumento da criatividade.
   O objetivo final é a criação de um livro bem estruturado, completo e sem furos. Os escritores iniciantes são a nossa principal motivação, já que são pessoas independentes e sem auxílio algum, que através do Docks desenvolvem melhor a escrita e estrutura de seus livros, possibilitando assim o crescimento de escritores na literatura nacional. </Paragraph>
<View style={styles.imgcontainer}>

<Image source={{uri: require("../images/mentor.png")}}
       style={{width:"180px", height:"300px",}}/>
       
              
<Image source={{uri: require("../images/patydocks.png")}}
       style={{width:"180px", height:"300px",}}/>

        <Image source={{uri: require("../images/dock_mao.png")}}
       style={{width:"190px", height:"300px"}}/>

<Image source={{uri: require("../images/psicopato.png")}}
       style={{width:"270px", height:"300px"}}/>

              

       </View>
       <View style={styles.containernome}>
               <Text style={styles.textmentor}>Mentor</Text>  
               <Text style={styles.textpaty}>Paty</Text>  
               <Text style={styles.textdock_mao}>Dock</Text>  
               <Text style={styles.textpsicopato}>Psicopato</Text>  
               </View>
               <View>
               <Text style={styles.containercriadoras}>Conheça o Time</Text>  
               <View style={styles.containercriadoras2}>
               </View>
               </View>
  </View>

    )
  
 
}