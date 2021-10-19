import { Modal, StyleSheet, Text, View, StatusBar, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { images } from '../constants/Images'
import Button from '../component/Button';

import React from 'react';

import { addProduct, removeProduct } from '../store/actions/cartActions';
import { connect } from 'react-redux';

class Product extends React.Component{

    isInCart(){
        let result= this.props.products.filter(value=>{
            return value.id==this.props.item.id;
        })
        return result.length>0;
    }

    render(){
    return <TouchableOpacity style={styles.container}
    onPress={() =>{

        if(!this.isInCart()){
            this.props.addProduct(this.props.item);
        }else{
            this.props.removeProduct(this.props.item);
        }
    }}>
        <Image source={require("../assets/poulpe.png")} style={styles.image}></Image>
        <Text style={styles.productName} >{this.props.item.name}</Text>
        <View style={styles.priceView}>
            <Text style={styles.price}>
                {this.isInCart()&& "OK "}
                {this.props.item.price} €
            </Text>
        </View>
</TouchableOpacity>
}
}

const mapStateToProps = state => {
    return {
        products: state.cart.products
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addProduct: data => {dispatch(addProduct(data));},
        removeProduct: data => {dispatch(removeProduct(data));},
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);

const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: 'rgba(52, 52, 52, 0.3)',
        flexDirection: "row",
        borderTopWidth: 0.2,
    },
    image: {
        height: 40,
        width: 40,
        alignSelf: "center",
        marginLeft: 5,
    },
    productName: {
        fontSize: 17,
        color: "white",
        alignSelf: "center",
        marginLeft: 10,
    },
    priceView: {
        flex: 1,
        alignSelf: "center",
        alignItems: "flex-end",
    },
    price: {
      color: "white",
      marginLeft: 20,
      fontSize: 17,
      flexDirection: "row",
      paddingRight: 2,
    }
})
