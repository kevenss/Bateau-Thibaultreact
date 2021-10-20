import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

export default function products(props) {
    return(
        <View style={styles.title}>
                <Text>Le bateau de Thibault</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        flex: 1,
        alignSelf: "center",
        marginTop: 50
      },
});