import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Tela3 = ({ navigation, route }) => {
  const [valorEntrada, setValorEntrada] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularConversao = () => {
    const tipoConversao = route.params?.tipoConversao;
    const valor = parseFloat(valorEntrada);

    switch (tipoConversao) {
      case 'KmParaMilha':
        setResultado((valor * 0.621371).toFixed(2) + ' Milhas');
        break;
      case 'MilhaParaKm':
        setResultado((valor / 0.621371).toFixed(2) + ' Quilômetros');
        break;
      case 'CelsiusParaFahrenheit':
        setResultado(((valor * 9/5) + 32).toFixed(2) + ' Fahrenheit');
        break;
      case 'FahrenheitParaCelsius':
        setResultado(((valor - 32) * 5/9).toFixed(2) + ' Celsius');
        break;
      default:
        setResultado('Selecione uma opção de conversão válida');
        break;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversão Selecionada</Text>
      <TextInput
        style={styles.input}
        placeholder="Insira o valor"
        onChangeText={(text) => setValorEntrada(text)}
        value={valorEntrada}
        keyboardType="numeric"
      />
      <Button title="Calcular" onPress={calcularConversao} />
      <Text style={styles.result}>{resultado}</Text>
      <Button title="Retornar" onPress={() => navigation.navigate('Tela2')} />
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
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#000000', // Borda preta
    borderRadius: 5,
    marginBottom: 10,
    fontSize: 16,
  },
  result: {
    fontSize: 18,
    marginTop: 20,
    color: '#000000', // Texto preto
  },
});

export default Tela3;