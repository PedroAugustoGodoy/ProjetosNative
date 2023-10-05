import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Tela1 from './src/components/Tela1';
import Tela2 from './src/components/Tela2';
import Tela3 from './src/components/Tela3';

const Stack = createStackNavigator();

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tela1">
        <Stack.Screen
          name="Tela1"
          component={Tela1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Tela2"
          component={Tela2}
          options={{ title: 'Converter Km para Milha' }}
        />
        <Stack.Screen
          name="Tela3"
          component={Tela3}
          options={{ title: 'Resultado da Conversão' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;