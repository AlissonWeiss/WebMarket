import React, {Component} from 'react'
import {ImageBackground, View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import {connect} from 'react-redux'
import {login} from '../store/actions/userActions'

import IconFontisto from 'react-native-vector-icons/Fontisto'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

class Login extends Component {
    state = {
        name: 'Temporário',
        email: '',
        password: '',
        isLoggedIn: false,
        token: null
    }

    componentDidUpdate = prevProps => {
        if (prevProps.isLoading && !this.props.isLoading) {
            this.props.navigation.navigate('Profile')
        }
    }

    login = () => {
        this.setState({isLoggedIn: true})
        this.props.onLogin({...this.state})
    }

    render() {
        return (
            <ImageBackground source={require('../../assets/imgs/backgroundLogin.jpg')} style={styles.backgroundImage}>
            <View style={styles.container}>

                <View style={styles.containerInput}>
                    <IconFontisto name={'email'} style={styles.icon} />
                    <TextInput placeholder='Email'
                    style={styles.input}
                    autoFocus={true}
                    keyboardType='email-address'
                    value={this.state.email}
                    onChangeText={email => this.setState({email})}
                    autoCapitalize='none' />
                </View>

                <View style={styles.containerInput}>
                    <MaterialCommunityIcons name={'security'} style={styles.icon} />
                    <TextInput placeholder='Senha'
                    style={styles.input}
                    value={this.state.password}
                    secureTextEntry={true}
                    onChangeText={password => this.setState({password})} />
                </View>

                <TouchableOpacity style={styles.botao} onPress={this.login}>
                    <Text style={styles.botaoTexto}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao} onPress={() => {
                    this.props.navigation.navigate('Register')
                }}>
                    <Text style={styles.botaoTexto}>Registrar</Text>
                </TouchableOpacity>
            </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create ({
    container: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 20,
        width: '95%'
    },
    botao: {
        backgroundColor: '#080',
        marginTop: 10,
        padding: 10,
        alignItems: 'center'
    },
    botaoTexto: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#EEE',
        padding: 10,
        width: '80%'
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerInput: {
        width: '100%',
        backgroundColor: '#EEE',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    icon: {
        padding: 10,
    }
})

const mapStateToProps = ({user}) => {
    return {
        isLoading: user.isLoading,
        isLoggedIn: user.isLoggedIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogin: user => dispatch(login(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)