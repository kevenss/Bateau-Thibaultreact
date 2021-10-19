import { Text, View } from 'react-native';
import React from 'react';
import styles from '../services/Style';
import Json from '../services/text';

export default function Vcard(props){
    return <View style={styles.conteneur}>
    <Text style={styles.contacts}>{Json.contact.tel}</Text>
    <Text style={styles.contacts}>{Json.contact.mail}</Text>
    <Text style={styles.contacts}>{Json.contact.face}</Text>
  </View>
}