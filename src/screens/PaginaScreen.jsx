import { View } from "react-native";
import { Paragraph, Text } from "react-native-paper";
import { styles } from "../utils/styles";

export const PaginaScreen = () => {
  return (
    <View>
      <View>
        <Text style={styles.pagdocks}>Método de criação de Personagem</Text>
      </View>
      <Paragraph>
        Uma boa narrativa quase sempre é movida por personagens marcantes. Às
        vezes, marcantes em suas grandiosas personalidades e habilidades
        mirabolantes. Outras, ficam presas na nossa memória por sua pura
        simplicidade e realismo, que remete intimamente às nossas vidas.
      </Paragraph>
      <Paragraph>
        O que não muda de um modelo para o outro é que uma boa personagem é uma
        personagem complexa, bem desenvolvida. E esse desenvolvimento é feito em
        camadas
      </Paragraph>
      Na metodologia a ser apresentada, trabalharemos com três níveis de
      criação.
      <Paragraph>
        Camada periférica: É a parte mais fácil e rápida a ser feita para criar o
        seu personagem. Aqui vamos pensar em como nosso personagem é
        fisicamente, como ele se comunica com outras pessoas e os dados básicos
      </Paragraph>
      A camada de entorno: Nesta camada, entenderemos como o personagem chegou
      até aqui, analisando seu histórico de vida e como foi moldada a sua
      personalidade. Basicamente é a biografia dele.
      <Paragraph>
        A camada central: Talvez a etapa mais desafiadora na hora de criar a
        ficha de personagem. Aqui desenvolvemos a alma, a essência do
        personagem.
      </Paragraph>
    </View>
  );
};
