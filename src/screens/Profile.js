import React, { Component } from 'react'
import {StyleSheet, View, Text, TouchableOpacity, Image, Dimensions} from 'react-native'
import {Gravatar} from 'react-native-gravatar'
import Header from '../components/Header'
import {connect} from 'react-redux'
import {logout} from '../store/actions/userActions'

class Profile extends Component {

    logout = () => {
        this.props.onLogout()
        this.props.navigation.navigate('Auth')
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={{uri: this.props.image}} style={styles.image} />
                <Text style={styles.nickname}>{this.props.nome}</Text>
                <Text style={styles.contato}>E-mail: {this.props.email}</Text>
                <Text style={styles.contato}>Telefone: {this.props.telefone}</Text>
                <TouchableOpacity onPress={this.logout} style={styles.btnLogout}>
                    <Text style={styles.btnText}>Sair</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginTop: 100
    },
    nickname: {
        marginTop: 30,
        fontSize: 30,
        fontWeight: 'bold'
    },
    btnLogout: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4'
    },
    btnText: {
        fontSize: 20,
        color: '#FFF'
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 3 / 5,
        resizeMode: 'contain',
        marginTop: 10,
        borderRadius: 8,
    },
    contato: {
        marginTop: 20,
        fontSize: 18
    }
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