import React, { Component } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Image
} from "react-native";
import { addProduct, removeProduct } from '../store/actions/cartActions';
import { connect } from 'react-redux';


class ProductCart extends React.Component {
  state = {
    modalVisible: false,
    quantity: 1
  };

  isInCart(){
      let result= this.props.products.filter(value=>{
          return value.id==this.props.item.id;
      })
      return result.length>0;
  }

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  render() {
    const { modalVisible } = this.state;
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Choisissez votre quantité :</Text>

              <TouchableOpacity onPress={() => this.setState({quantity:5})}>
              <Text>
              5
              </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.setState({quantity:4})}>
              <Text>
              4
              </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.setState({quantity:3})}>
              <Text>
              3
              </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.setState({quantity:2})}>
              <Text>
              2
              </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.setState({quantity:1})}>
              <Text>
              1
              </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress= { () => {
                    if(this.state.quantity > 1) {
                      this.setState({quantity: this.state.quantity-1})
                    }
                  }
                } >
              <Text>
              - 1
              </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.setState({quantity: this.state.quantity+1})}>
              <Text>
              + 1
              </Text>
              </TouchableOpacity>
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                  this.setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableOpacity
          style={styles.openButton}
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
        <Image source={require("../assets/poulpe.png")} style={styles.image}></Image>
        <Text style={styles.productName} >{this.props.item.name}</Text>
        <Text style={styles.price}>
            {this.isInCart()&& "OK "}
            {this.props.item.price} €
            {this.state.quantity}
        </Text>
        </TouchableOpacity>
      </View>
    );
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

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    height: 50,
    backgroundColor: 'rgba(52, 52, 52, 0.3)',
    flexDirection: "row",
    borderTopWidth: 0.2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  image: {
      height: 40,
      width: 40,
      alignSelf: "center",
      marginLeft: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductCart);
