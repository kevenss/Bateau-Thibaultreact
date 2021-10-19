import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Footer(props) {
    return (
        <View style={styles.footbar}>
            <Text>Powered by Bik Inc.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    footbar: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
      }
});