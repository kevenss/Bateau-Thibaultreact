import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider } from 'react-redux';

import Home from './screen/Home'
import Products from './screen/Products'
import productsList from './screen/productsList'
import Bateaux from './screen/Bateaux'
import Recettes from './screen/Recettes'
import Contact from './screen/Contact'
import Restaurants from './screen/Restaurants'
import Store from './screen/Store'

import deLaBrise from './screen/bateaux/deLaBrise'
import aquilon from './screen/bateaux/aquilon'
import gastMicher from './screen/bateaux/gastMicher'
import saphir from './screen/bateaux/saphir'

import desGascons from './screen/Restaurants/desGascons'
import bistrotDuSommelier from './screen/Restaurants/bistrotDuSommelier'
import bistrotLandais from './screen/Restaurants/bistrotLandais'
import fousDeLIle from './screen/Restaurants/fousDeLIle'
import villa9Trois from './screen/Restaurants/villa9Trois'

import Homard from './screen/Recipes/Homard'
import Bar from './screen/Recipes/Bar'
import StJacques from './screen/Recipes/StJacques'
import Recette from './screen/Recipes/Recette'
import TourteauLinguine from './screen/Recipes/TourteauLinguine'

import store  from './store/configureStore'


const Stack = createStackNavigator();

export default function App() {
  return (

      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false}}>
            <Stack.Screen name="home" component={ Home } />
            <Stack.Screen name="bateaux" component={ Bateaux } />
            <Stack.Screen name="deLaBrise" component={ deLaBrise } />
            <Stack.Screen name="products" component={ Products } />
            <Stack.Screen name="store" component={ Store } />

            <Stack.Screen name="productsList" component={ productsList } />
            <Stack.Screen name="restaurants" component={ Restaurants } />
            <Stack.Screen name="recettes" component={ Recettes } />

            <Stack.Screen name="TourteauLinguine" component={ TourteauLinguine } />
            <Stack.Screen name="Homard" component={ Homard } />
            <Stack.Screen name="Bar" component={ Bar } />
            <Stack.Screen name="StJacques" component={ StJacques } />
            <Stack.Screen name="Recette" component={ Recette } />

            <Stack.Screen name="aquilon" component={ aquilon } />
            <Stack.Screen name="gastMicher" component={ gastMicher } />
            <Stack.Screen name="saphir" component={ saphir } />

            <Stack.Screen name="desGascons" component={ desGascons } />
            <Stack.Screen name="bistrotDuSommelier" component={ bistrotDuSommelier } />
            <Stack.Screen name="bistrotLandais" component={ bistrotLandais } />
            <Stack.Screen name="fousDeLIle" component={ fousDeLIle } />
            <Stack.Screen name="villa9Trois" component={ villa9Trois } />

            <Stack.Screen name="Contact" component={ Contact } />
            <Stack.Screen name="Partenaire" component={ Contact } />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>

  );
}
