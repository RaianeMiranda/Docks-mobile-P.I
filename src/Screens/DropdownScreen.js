import * as React from "react";
import { View, Image, ImageBackground, TouchableOpacity } from "react-native";

import {
  Modal,
  Portal,
  Text,
  Button,
  Provider,
} from "react-native-paper";

export const MyComponent = ({navigation}) => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const [text, setText] = React.useState("");

  const containerStyle = {
    backgroundColor: "white",
    height: "100px",
    
    width: "150px",
  };

  return (
    <Provider>
      <Portal>
        <Modal
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            marginTop: "0px",
          }}
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
         <View>
<Text>OLA</Text>
         </View>
        </Modal>
      </Portal>
      <Button style={{ marginTop: 30 }} onPress={showModal}>
        Show
      </Button>
   </Provider>
  );
};