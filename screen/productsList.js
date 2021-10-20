import React from 'react'
import { StyleSheet, View, Text} from 'react-native';
import BackgroundImage from '../components/BackgroundImage';
import header from '../components/Header';
import Product from '../components/Products';

export default class ProductsList extends React.Component {
  render(){
    let products = this.props.route.params.data ? this.props.route.params.data : [];
    return <View style={styles.container}>
      <BackgroundImage />
      <Header navigation={this.props.navigation}/>
      <Text style={{marginVertical:10, textAlign: "center"}}> Choisissez vos produits
      <View style={{flex:1}}>
        {products.map((value,index)=>{
          return <Product key{index} items={value}/>
        })}
      </View>
  }
}
