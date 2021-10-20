import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import { Provider } from 'react-redux';
// import store from './store/configureStore';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './screen/Home'
// import Products from './screen/Products'
import batDeLaBrise from './screen/bateaux/deLaBrise'
// import productList from './screen/productsList'
// import Cart from './screen/cart';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false}}>
      <Stack.Screen name="De La Brise" component={ batDeLaBrise } />
        <Stack.Screen name="home" component={ Home } />
        <Stack.Screen name="products" component={ Products } />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
