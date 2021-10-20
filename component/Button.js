import { Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React from 'react';


export default function Button(props){
    return <TouchableOpacity style={styles.button}
            onPress={() => props.navigation.navigate(props.screen)}>
                {props.image && <Image source={props.image} style={styles.image}></Image>}
                <Text style={styles.text}>{props.text}</Text>
            </TouchableOpacity>
}
const styles = StyleSheet.create({
    button: {
        margin: "2%",
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffeeeeee',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        height: 80,
        padding: "3%",
    },
    text: {
        marginLeft: 10,
    },
    image: {
        width: 70,
        height: 70,
        
    }
});


