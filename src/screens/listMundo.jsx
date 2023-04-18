import { Image, View } from "react-native"
import { Button, Text } from "react-native-paper"
import { useEffect, useState } from "react"
import { collection, doc, onSnapshot } from "firebase/firestore"
import { auth, database } from "../config/firebase/firebase"

export const listMundo = ({ route, navigation }) => {
    const [bookId, setBookId] = useState(route.params.bookId);
    const [mundo, setMundo] = useState([]);

    const user = auth.currentUser;
    if (!user) {
        throw new Error("Usuário não autenticado.");
    };

    useEffect(() => {
        console.log(bookId)
        const unsubscribe = onSnapshot(
            collection(database, "mundo"),
            (querySnapshot) => {
                const mundoTemp = []
                querySnapshot.forEach((doc) => {
                    const data = doc.data()
                    if (data.bookId === bookId) {
                        mundoTemp.push({
                            ...data,
                            id: doc.id
                        })
                    }
                })
                setMundo(mundoTemp)
            }
        )
        return () => unsubscribe()
    }, [bookId])

    useEffect(() => {
        const handleBeforeUnload = () => {
            setBookId("");
        };
        window.addEventListener("beforeunload", handleBeforeUnload);

        if (route.params.bookId !== bookId) {
            setBookId(route.params.bookId);
        }
        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, [bookId, route.params.bookId]);

    return (
        <View>
            <Text>Lista de Mundos</Text>
            {

                Array.isArray(mundo) && mundo.map((mundo) => (
                    <View key={mundo.id}>
<<<<<<< HEAD
                        <Button onPress={() => navigation.navigate("altMundo", {
                            bookId: bookId,
                            mundoId: mundo.id,
                            UserId: user.id
                        })}>{mundo.nomeMundo}</Button>
=======
                        <Button onPress={() => navigation.navigate("altMundo", { bookId, mundoId: mundo.id,  UserId:user.id })}>{mundo.nomeMundo}</Button>
>>>>>>> 1f3c31b94c25920a259cbe44ac3cda9730bda0ce
                        {/* <Button onPress={() => handleExcluir(mundo)}>Excluir</Button> */}
                    </View>
                ))
            }
        </View>
    );
};


