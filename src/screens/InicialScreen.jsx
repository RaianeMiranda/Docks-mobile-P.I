import { View } from "react-native";
import { Text } from "react-native-paper";
import { colors, locations, styles } from "../config/styles";
import { LinearGradient } from "expo-linear-gradient";

export const InicialScreen = () => {
    return (
        <View style={styles.containerConfig}>
            <View>
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={colors}
                    locations={locations}
                    style={{height: 7, width: "100%"}}
                />
            </View>
            <View style={styles.container}>
                <View>
                    <Text style={styles.tituloInicial}>Escrevendo</Text>
                </View>
            </View>
        </View>
    );
};