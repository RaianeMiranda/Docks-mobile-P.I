import { LinearGradient } from "expo-linear-gradient";
import { Image, Text, View } from "react-native";
import { Appbar, Button, Paragraph } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { colors, locations, styles } from "../config/styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function CapitulosScreen() {
  const _goBack = () => console.log("Went back");
  const _handleMore = () => console.log("Shown more");

  return (
    <SafeAreaProvider style={styles.containercriacaoper}>
      <Appbar.Header style={styles.navConfig}>
        <Appbar.BackAction onPress={_goBack} />
        <Appbar.Content titleStyle={{ textAlign: "center", fontWeight: "bold", fontSize: "20px" }} title="Alice na Favela" />
        <Appbar.Action icon="menu" onPress={_handleMore} />
      </Appbar.Header>
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
      <View>
        <Paragraph style={styles.capitulosparagraph}>Capítulos</Paragraph>

        <Button style={styles.buttoncapitulos}><View style={styles.viewcapitulos}><View><Text style={styles.capitulosub}>Capítulo:</Text><Text style={styles.capitulostext}>Capítulo1</Text>
        </View><View> <Image style={styles.imagelixeira}
          source={{ uri: require("/assets/images/lixeira.png") }} /></View> </View> </Button>

        <Button style={styles.buttoncapitulos}>
          <View style={styles.viewcapitulos}>
            <View>
              <Text style={styles.capitulosub}>Capítulo:</Text>
              <Text style={styles.capitulostext}>Capítulo1</Text>
            </View>
            <View>
              <Image style={styles.imagelixeira}
                source={{ uri: require("/assets/images/lixeira.png") }} />
            </View>
          </View>
        </Button>
        <Button style={styles.buttoncapitulos}>
          <View style={styles.viewcapitulos}>
            <View>
              <Text style={styles.capitulosub}>Capítulo:</Text>
              <Text style={styles.capitulostext}>Capítulo1</Text>
            </View>
            <View>
              <Image style={styles.imagelixeira}
                source={{ uri: require("/assets/images/lixeira.png") }} />
            </View>
          </View>
        </Button>
        <Button style={styles.buttoncapitulos}><View style={styles.viewcapitulos}>
          <View>
            <Text style={styles.capitulosub}>Capítulo:</Text>
            <Text style={styles.capitulostext}>Capítulo1</Text>
          </View>
          <View>
            <Image style={styles.imagelixeira}
              source={{ uri: require("/assets/images/lixeira.png") }} />
          </View>
        </View>
        </Button>
        <Button style={styles.buttoncapitulos}>
          <View style={styles.viewcapitulos}>
            <View>
              <Text style={styles.capitulosub}>Capítulo:</Text>
              <Text style={styles.capitulostext}>Capítulo1</Text>
            </View>
            <View>
              <Image style={styles.imagelixeira}
                source={{ uri: require("/assets/images/lixeira.png") }} />
            </View>
          </View>
        </Button>
        <View>
          <Button style={styles.buttonadicionar}>
            <View style={styles.containerplustext}>
            <Icon name="plus" style={styles.iconplus}
                 />
            <Text style={styles.textadicionar}>Adicionar novo capítulo</Text>
           
            </View>
            </Button>
        </View>
      </View>
      <View>
        <LinearGradient
          // Background Linear Gradient 
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={colors}
          locations={locations}
          style={{ height: 7, width: "100%", marginTop:"250px" }}
        />
      </View>

    </SafeAreaProvider>
  );
}