import React from "react";
import { StyleSheet, Text, View } from 'react-native';

export default function Title(props){
    return(
    <View style={styles.title}>
        <Text style={styles.contentTitle}>{props.title}</Text>
    </View>)
}

const styles = StyleSheet.create({
    title: {
        flex: 1,
        alignSelf: "center",
        marginTop: 50,
        fontFamily: "../assets/SnellRoundHand.ttf"
      },

    contentTitle: {
        fontStyle: 'italic',
        fontSize: 25,
        color: 'white'
      }
});