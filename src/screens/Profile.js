import React, { Component } from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'
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
        const options = { email: this.props.email, secure: true}
        return (
            <View style={styles.container}>
                <Header />
                <Gravatar options={options} style={styles.avatar} />
                <Text style={styles.nickname}>{this.props.nome}</Text>
                <Text style={styles.email}>{this.props.email}</Text>
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
    email: {
        marginTop: 20,
        fontSize: 25
    },
    btnLogout: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4'
    },
    btnText: {
        fontSize: 20,
        color: '#FFF'
    }
})

const mapStateToProps = ({ user }) => {
    return {
        email: user.email,
        nome: user.nome
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)