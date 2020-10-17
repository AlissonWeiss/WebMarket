import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

export default props => {
    return (
        <View style={styles.container}>
        <Text style={styles.nome}>{props.userName}</Text>
        <Text style={styles.contato}>{props.email}</Text>
        <Text style={styles.contato}>{props.telefone}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
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