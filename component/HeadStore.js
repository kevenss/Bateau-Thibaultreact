import { Text, TouchableOpacity, StyleSheet, Image, View, ImageBackground } from 'react-native';
import React from 'react';
// import styles from '../services/Style'


export default function HeadStore(props){
    return <View style={styles.header}>
                <View style={styles.headerBlack}>
                    <TouchableOpacity style={styles.button}
                    onPress={() => props.navigation.navigate("home")}>
                        <Image source={require("../assets/icons/homeLogo.png")} style={styles.logoL}></Image>
                    </TouchableOpacity>
                        <ImageBackground source={require("../assets/navbarbg.png")} style={styles.bg}>
                            <Text style={styles.text}></Text>
                        </ImageBackground>
                    <TouchableOpacity style={styles.button}
                    onPress={() => props.navigation.navigate("store")}>
                    <Image source={require("../assets/icons/cartLogo.png")} style={styles.logoR}></Image>
                    </TouchableOpacity>
                </View>
            </View>
}
const styles = StyleSheet.create({
    text: {
        color: "white",
        alignItems: "center",
        paddingBottom: "10%"
    },
    title: {
        color: "black",
        marginTop: 10,
        marginBottom: 2,
    },
    logoL: {
        width: 30,
        height: 30,
        marginLeft: 10,
        marginTop: 5,
    },
    logoR: {
        width: 30,
        height: 30,
        marginLeft: 45,
        marginTop: 5,
    },
    
    bg: {
        alignItems: "stretch",
        flex: 2,
    },
    button: {
        flex: 1,
        height: 40,
    },
    headerBlack: {
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "black",
    },
    header2: {
        alignItems: "center",
        flexDirection: "row",
        alignSelf: "center",
    }
});