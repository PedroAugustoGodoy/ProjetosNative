import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Tela2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha uma Conversão:</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Quilômetro para Milha"
          onPress={() => navigation.navigate('Tela3', { tipoConversao: 'KmParaMilha' })}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Milha para Quilômetro"
          onPress={() => navigation.navigate('Tela3', { tipoConversao: 'MilhaParaKm' })}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Celsius para Fahrenheit"
          onPress={() => navigation.navigate('Tela3', { tipoConversao: 'CelsiusParaFahrenheit' })}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Fahrenheit para Celsius"
          onPress={() => navigation.navigate('Tela3', { tipoConversao: 'FahrenheitParaCelsius' })}
        />
      </View>
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
  buttonContainer: {
    marginBottom: 10, // Espaço entre os botões
  },
});

export default Tela2;
