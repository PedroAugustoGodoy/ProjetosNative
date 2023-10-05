import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Tela2 = ({ navigation }) => {
  const [valorKm, setValorKm] = useState('');

  const handleConverterPress = () => {
    // Verificar se o valor em Km é válido antes de prosseguir
    if (valorKm && !isNaN(valorKm)) {
      // Navegar para a Tela3 e passar o valor em Km como parâmetro
      navigation.navigate('Tela3', { valorKm: parseFloat(valorKm) });
    } else {
      alert('Por favor, insira um valor válido em Km.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Converter Km para Milha</Text>
      <TextInput
        style={styles.input}
        placeholder="Insira o valor em Km"
        onChangeText={(text) => setValorKm(text)}
        value={valorKm}
        keyboardType="numeric"
      />
      <Button title="Converter" onPress={handleConverterPress} />
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
});

export default Tela2;