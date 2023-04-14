import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Popover from 'react-native-popover-view';

const MenuPop = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={toggleMenu}>
        <Text style={styles.buttonText}>Abrir menu</Text>
      </TouchableOpacity>
      <Popover
        isVisible={isMenuVisible}
        onRequestClose={toggleMenu}
        placement="bottom"
        arrowStyle={styles.popoverArrow}
      >
        <TouchableOpacity style={styles.menuItem} onPress={() => console.log('Editar livro')}>
          <Text style={styles.menuItemText}>Editar livro</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.menuItem} onPress={() => console.log('Excluir livro')}>
          <Text style={styles.menuItemText}>Excluir livro</Text>
        </TouchableOpacity>
      </Popover>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default MenuPop;
