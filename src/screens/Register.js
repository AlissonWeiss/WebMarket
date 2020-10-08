import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'

class Register extends Component {
    state = {
        name: '',
        senha: '',
        email: ''
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput placeholder='Nome'
                    style={styles.input}
                    autoFocus={true}
                    value={this.state.name}
                    onChangeText={name => this.setState({name})} />

                <TextInput placeholder='Email'
                    style={styles.input}
                    autoFocus={true}
                    value={this.state.email}
                    onChangeText={email => this.setState({email})} />

                <TextInput placeholder='Senha'
                    style={styles.input}
                    autoFocus={true}
                    value={this.state.senha}
                    secureTextEntry={true}
                    onChangeText={senha => this.setState({senha})} />
                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.botaoTexto}>Salvar</Text>
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
    input: {
        marginTop: 20,
        width: '90%',
        backgroundColor: '#EEE',
        height: 40,
        borderWidth: 1,
        borderColor: '#333',
        paddingLeft: 15
    }
})

export default Register