import { LinearGradient } from "expo-linear-gradient";
import { Image, Text, View } from "react-native";
import { Paragraph } from "react-native-paper";
import { colors, locations, styles } from "../utils/styles";

export const SobreScreen = () => {
  return (
    <View style={styles.containersobre}>
      <LinearGradient // Background Linear Gradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={colors}
        locations={locations}
        style={{ height: 7, width: "100%" }}
      />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={{ uri: require("../images/dockinha.png") }}
          style={{ width: "100px", height: "100px", marginTop: "10%" }}
        />
      </View>
      <View>
        <Text style={styles.textdocks}>DOCKS</Text>

        <Text style={styles.textdocks2}>Versão: 2.0</Text>
      </View>
      <Text style={styles.textversion}>Sobre o Docks</Text>
      <View style={styles.linear}>
        <Paragraph>
          {" "}
          O Docks é uma plataforma de aprendizagem, que foi criado por leitoras
          com o objetivo de suprir a carência de aplicativos na área da escrita.{" "}
        </Paragraph>
        <Paragraph>
          {" "}
          O site proporciona a aprendizagem do método de escrita, o Snowflake e
          outros recursos como: Criação de Mundos, Personagens e o roteiro da
          Jornada do Herói. Além das atividades diárias para o aumento da
          criatividade.
        </Paragraph>
        <Paragraph>
          {" "}
          O objetivo final é a criação de um livro bem estruturado, completo e
          sem furos. Os escritores iniciantes são a nossa principal motivação,
          já que são pessoas independentes e sem auxílio algum, que através do
          Docks desenvolvem melhor a escrita e estrutura de seus livros,
          possibilitando assim o crescimento de escritores na literatura
          nacional.{" "}
        </Paragraph>
        <Paragraph>
          {" "}
          O Docks é uma plataforma de aprendizagem, que foi criado por leitoras
          com o objetivo de suprir a carência de aplicativos na área da escrita.
          O site proporciona a aprendizagem do método de escrita, o Snowflake e
          outros recursos como: Criação de Mundos, Personagens e o roteiro da
          Jornada do Herói. Além das atividades diárias para o aumento da
          criatividade. O objetivo final é a criação de um livro bem
          estruturado, completo e sem furos. Os escritores iniciantes são a
          nossa principal motivação, já que são pessoas independentes e sem
          auxílio algum, que através do Docks desenvolvem melhor a escrita e
          estrutura de seus livros, possibilitando assim o crescimento de
          escritores na literatura nacional.
        </Paragraph>
        <View style={styles.imgcontainer}>
        <View style={{right:"15px"}}>
            <Image
              source={{ uri: require("../images/mentor.png") }}
              style={{ width: "90px", height: "90px" }}
              resizeMode="contain"
            />
            <View style={styles.containernome}>
              <Text style={styles.textmentor}>Mentor</Text>
            </View>
          </View>
          <View  style={{right:"15px"}}>
            <Image
              source={{ uri: require("../images/patydocks.png") }}
              style={{ width: "90px", height: "90px" }}
              resizeMode="contain"
            />
            <View style={styles.containernome}>
              <Text style={styles.textpaty}>Paty</Text>
            </View>
          </View>
          <View  style={{right:"15px"}}>
            <Image
              source={{ uri: require("../images/docks.png") }}
              style={{ width: "90px", height: "90px" }}
              resizeMode="contain"
            />
            <View style={styles.containernome}>
              <Text style={styles.textdock_mao}>Dock</Text>
            </View>
          </View>
          <View  style={{right:"15px"}}>
            <Image
              source={{ uri: require("../images/psicopato.png") }}
              style={{ width: "90px", height: "90px" }}
              resizeMode="contain"
            />
            <View style={styles.containernome}>
              <Text style={styles.textpsicopato}>Psicopato</Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.containercriadoras}>Conheça o Time</Text>

          <View style={styles.containercriadoras2}>
            <View style={styles.containerfototext_}>
              <Image
                source={{ uri: require("../images/clara.png") }}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50px",
                  marginRight: "10px",
                }}
              />

              <View>
                <View style>
                  <Text style={styles.nomesdevs1_}>Clara Vasconcelos</Text>
                  <Text style={styles.nomesfun}>Desenvolvedora</Text>
                </View>
              </View>
            </View>
            <View style={styles.containerfototext}>
              <Image
                source={{ uri: require("../images/helena.png") }}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50px",
                  marginRight: "10px",
                }}
              />

              <View>
                <View style>
                  <Text style={styles.nomesdevs1}>Helena Meirelles</Text>
                  <Text style={styles.nomesfun}>Desenvolvedora</Text>
                </View>
              </View>
            </View>

            <View style={styles.containerfototext}>
              <Image
                source={{ uri: require("../images/heloisa.png") }}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50px",
                  marginRight: "10px",
                }}
              />

              <View>
                <View style>
                  <Text style={styles.nomesdevs1}>Heloísa Rebello</Text>
                  <Text style={styles.nomesfun}>Desenvolvedora</Text>
                </View>
              </View>
            </View>

            <View style={styles.containerfototext}>
              <Image
                source={{ uri: require("../images/raiane.png") }}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50px",
                  marginRight: "10px",
                }}
              />

              <View>
                <View style>
                  <Text style={styles.nomesdevs1}>Raiane Miranda</Text>
                  <Text style={styles.nomesfun}>Desenvolvedora</Text>
                </View>
              </View>
            </View>

            <View style={styles.containerfototext}>
              <Image
                source={{ uri: require("../images/dockinha.png") }}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50px",
                  marginRight: "10px",
                }}
              />

              <View>
                <View style>
                  <Text style={styles.nomesdevs1}>Você!!!</Text>
                  <Text style={styles.nomesfun}>Usuário do Docks</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <Text style={styles.containercriadoras3}>
          A nossa equipe visa com o Docks facilitar a criação de um livro e
          tornar o aprendizado acessível para escritores .
        </Text>
        <LinearGradient // Background Linear Gradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={colors}
          locations={locations}
          style={{ height: 7, width: "140%", marginTop: "30%" }}
        />
      </View>
    </View>
  );
};
