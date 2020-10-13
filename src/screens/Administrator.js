import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native'

class Administrator extends Component {

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.botao} onPress={() => this.props.navigation.navigate('AddProduto')}>
                    <Text style={styles.botaoTexto}>Adicionar novo produto</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={() => this.props.navigation.navigate('AddFabricante')}>
                    <Text>Adicionar novo fabricante</Text>
                </TouchableOpacity>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    botao: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4'
    },
    botaoTexto: {
        fontSize: 20,
        color: '#FFF'
    },
})

export default Administrator
