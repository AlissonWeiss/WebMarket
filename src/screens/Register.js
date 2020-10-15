import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native'

import {connect} from 'react-redux'
import {createUser} from '../store/actions/userActions'

import validaRegistro from '../validacoes/validaRegistro'

class Register extends Component {
    state = {
        nome: '',
        password: '',
        passwordConfirmacao: '',
        email: ''
    }

    salvar = user => {
        var retornoValidacao = new validaRegistro().Validate(user)
        if (retornoValidacao == ''){
            this.props.onCreateUser(user)
        }
        else{
            Alert.alert('Erro', retornoValidacao)
        }
    }

    componentDidUpdate = prevProps => {
        if (prevProps.isLoading && !this.props.isLoading) {
            this.setState({
                nome: '',
                password: '',
                passwordConfirmacao: '',
                email: ''
            })
            this.props.navigation.navigate('Profile')
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput placeholder='Nome'
                    style={styles.input}
                    autoFocus={true}
                    value={this.state.nome}
                    onChangeText={nome => this.setState({nome})} />

                <TextInput placeholder='Email'
                    style={styles.input}
                    value={this.state.email}
                    keyboardType='email-address'
                    onChangeText={email => this.setState({email})} />

                <TextInput placeholder='Senha'
                    style={styles.input}
                    value={this.state.password}
                    secureTextEntry={true}
                    onChangeText={password => this.setState({password})} />

                <TextInput placeholder='Confirme sua senha'
                    style={styles.input}
                    value={this.state.passwordConfirmacao}
                    secureTextEntry={true}
                    onChangeText={passwordConfirmacao => this.setState({passwordConfirmacao})} />

                <TouchableOpacity style={styles.botao} onPress={() => this.salvar(this.state)}>
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

const mapStateToProps = ({user}) => {
    return {
        isLoading: user.isLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCreateUser: user => dispatch(createUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)