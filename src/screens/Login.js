import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import {connect} from 'react-redux'
import {login} from '../store/actions/userActions'

class Login extends Component {
    state = {
        name: 'Temporário',
        email: '',
        senha: '',
        isLoggedIn: false,
    }

    login = () => {
        this.state.isLoggedIn = true;
        this.props.onLogin({...this.state})
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

                <TouchableOpacity style={styles.botao} onPress={() => {
                    this.props.navigation.navigate('Register')
                }}>
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

const mapDispatchToProps = dispatch => {
    return {
        onLogin: user => dispatch(login(user))
    }
}

export default connect(null, mapDispatchToProps)(Login)