import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Tela3 = ({ navigation, route }) => {
  const [valorKm, setValorKm] = useState(0);
  const [valorMilha, setValorMilha] = useState(0);

  useEffect(() => {
    // Obtenha o valor em Km passado como parâmetro da Tela2
    const km = route.params?.valorKm || 0;

    // Realize a conversão de milhas para quilômetros (1 Milha = 1.60934 Km)
    const milha = km / 1.60934;

    // Atualize os estados com os valores
    setValorKm(km);
    setValorMilha(milha);
  }, [route.params?.valorKm]);

  const handleConverterNovamentePress = () => {
    // Navegar de volta para a Tela2
    navigation.navigate('Tela2');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resultado da Conversão</Text>
      <Text style={styles.result}>
        {`${valorMilha.toFixed(2)} Milhas equivalem a ${valorKm.toFixed(2)} Km`}
      </Text>
      <Button title="Fazer novamente" onPress={handleConverterNovamentePress} />
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
  result: {
    fontSize: 18,
    marginBottom: 20,
    color: '#000000', // Texto preto
  },
});

export default Tela3;