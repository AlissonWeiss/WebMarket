import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'

import {connect} from 'react-redux'
import {createUser} from '../store/actions/userActions'

class Register extends Component {
    state = {
        nome: '',
        password: '',
        email: ''
    }

    componentDidUpdate = prevProps => {
        if (prevProps.isLoading && !this.props.isLoading) {
            this.setState({
                nome: '',
                password: '',
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
                    onChangeText={email => this.setState({email})} />

                <TextInput placeholder='Senha'
                    style={styles.input}
                    value={this.state.password}
                    secureTextEntry={true}
                    onChangeText={password => this.setState({password})} />
                <TouchableOpacity style={styles.botao} onPress={() => {this.props.onCreateUser(this.state)}}>
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