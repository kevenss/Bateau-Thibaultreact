import { Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React from 'react';


export default function Button(props){
    return <TouchableOpacity style={styles.button}
            onPress={() => props.navigation.navigate(props.screen, {data: props.data ? props.data: []})}>
                {props.image && <Image source={props.image} style={styles.image}></Image>}
                <Text style={styles.text}>{props.text}</Text>
            </TouchableOpacity>
}
const styles = StyleSheet.create({
    button: {
        margin: "2%",
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(52, 52, 52, 0.3)',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        height: 80,
        padding: "3%",
        borderWidth: 1,
    },
    text: {
        marginLeft: 10,
        color: "white",
    },
    image: {
        width: 60,
        height: 60,
    }
});