import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

import IconFontisto from 'react-native-vector-icons/Fontisto'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

export default props => {
    return (
        <View style={styles.container}>

            <View style={styles.containerInfo}>
                <SimpleLineIcons name={'user'} style={styles.icon} />
                <Text style={styles.textos}>{props.userName}</Text>
            </View>

            <View style={styles.containerInfo}>
                <IconFontisto name={'email'} style={styles.icon} />
                <Text style={styles.textos}>{props.email}</Text>
            </View>

            <View style={styles.containerInfo}>
                <IconFontisto name={'phone'} style={styles.icon} />
                <Text style={styles.textos}>{props.telefone}</Text>
            </View>
            <Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
        backgroundColor: '#989898'
    },
    nome: {
        color: '#444',
        marginVertical: 10,
        fontSize: 15,
        fontWeight: 'bold'
    },
    contato: {
        color: 'black',
        marginVertical: 10,
        fontSize: 15,
        fontWeight: 'bold'
    },
    containerInfo: {
        width: '100%',
        backgroundColor: '#909090',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    icon: {
        padding: 10,
    },
    textos: {
        backgroundColor: '#909090',
        padding: 10,
        width: '85%',
    },

})