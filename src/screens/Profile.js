import React, { Component } from 'react'
import {ImageBackground, StyleSheet, View, Text, TouchableOpacity, Image, Dimensions} from 'react-native'
import {connect} from 'react-redux'
import {logout} from '../store/actions/userActions'

import IconFontisto from 'react-native-vector-icons/Fontisto'

class Profile extends Component {

    logout = () => {
        this.props.onLogout()
        this.props.navigation.navigate('Auth')
    }

    render() {
        return (
            <ImageBackground source={require('../../assets/imgs/backgroundProfile.jpg')} style={styles.backgroundImage}>
                <View style={styles.container}>
                    <Image source={{uri: this.props.image}} style={styles.image} />

                    <Text style={styles.nickname}>{this.props.nome}</Text>

                    <View style={styles.containerInfo}>
                        <IconFontisto name={'email'} style={styles.icon} />
                        <Text style={styles.textos}>{this.props.email}</Text>
                    </View>

                    <View style={styles.containerInfo}>
                        <IconFontisto name={'phone'} style={styles.icon} />
                        <Text style={styles.textos}>{this.props.telefone}</Text>
                    </View>
                    
                    <TouchableOpacity onPress={this.logout} style={styles.botao}>
                        <Text style={styles.botaoTexto}>Sair</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 20,
        width: '90%',
    },
    nickname: {
        marginTop: 25,
        fontSize: 25,
        fontWeight: 'bold',
        backgroundColor: '#AAA',
    },
    botao: {
        backgroundColor: '#080',
        marginTop: 30,
        padding: 10,
        alignItems: 'center'
    },
    botaoTexto: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 3 / 5,
        resizeMode: 'contain',
        marginTop: 10,
        borderRadius: 8,
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerInfo: {
        width: '100%',
        backgroundColor: '#AAA',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    icon: {
        padding: 10,
    },
    textos: {
        backgroundColor: '#AAA',
        padding: 10,
        width: '85%',
    },
})

const mapStateToProps = ({ user }) => {
    return {
        email: user.email,
        nome: user.nome,
        image: user.image,
        telefone: user.telefone,
        isLoggedIn: user.isLoggedIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)