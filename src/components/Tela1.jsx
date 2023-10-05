import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Tela2 from './Tela2';

const Tela1 = ({ navigation }) => {
  const handleConvertPress = () => {
    navigation.navigate(Tela2); // Navegar para a segunda tela ao pressionar o botão
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-Vindo ao Aplicativo de Conversão</Text>
      <TouchableOpacity style={styles.button} onPress={handleConvertPress}>
        <Text style={styles.buttonText}>Converter</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CCCCCC', // Fundo cinza
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000000', // Texto preto
  },
  button: {
    backgroundColor: '#000000', // Fundo preto para o botão
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF', // Texto branco para o botão
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Tela1;