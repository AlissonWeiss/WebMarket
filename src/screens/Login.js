import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native'

class Login extends Component {
    state = {
        email: '',
        senha: ''
    }

    login = () => {
        this.props.navigation.navigate('Profile')
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput placeholder='Email'
                style={styles.input}
                autoFocus={true}
                keyboardType='email-address'
                value={this.state.email}
                onChangeText={email => this.setState({email})} />

                <TextInput placeholder='Senha'
                style={styles.input}
                value={this.state.senha}
                secureTextEntry={true}
                onChangeText={senha => this.setState({senha})} />

                <TouchableOpacity style={styles.botao} onPress={this.login}>
                    <Text style={styles.botaoTexto}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao} onPress={this.login}>
                    <Text style={styles.botaoTexto}>Registrar</Text>
                </TouchableOpacity>

            </View>
        )
    }

}

const styles = StyleSheet.create ({
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
        borderColor: '#333'
    }
})

export default Login