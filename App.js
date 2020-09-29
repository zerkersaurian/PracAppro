import React from 'react';
import ZipCodeScreen from './screen/ZipcodeScreen';
import WeatherScreen from './screen/WeatherScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ZipCodeScreen} />
        <Stack.Screen name="Weather" component={WeatherScreen}/>
      </Stack.Navigator>
    </NavigationContainer> 
  );
}
