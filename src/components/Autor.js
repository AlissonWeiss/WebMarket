import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

export default props => {
    return (
        <View style={styles.container}>
            <Image source={{uri: props.image}} style={styles.image}></Image>
        <Text style={styles.nome}>{props.nome}</Text>
        <Text style={styles.contato}>{props.email}</Text>
        <Text style={styles.contato}>{props.telefone}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 30,
        height: 30,
        borderRadius: 40,
        marginHorizontal: 10
    },
    nome: {
        color: '#444',
        marginVertical: 10,
        fontSize: 15,
        fontWeight: 'bold'
    },
    contato: {
        color: '#444',
        marginVertical: 10,
        fontSize: 12,
        fontWeight: 'bold'
    }


})