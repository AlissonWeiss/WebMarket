import React, {Component} from 'react'
import {connect} from 'react-redux'
import {ImageBackground, View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'

class Administrator extends Component {

    checarUsuarioLogado = () => {
        if (!this.props.isLoggedIn) {
            Alert.alert('Usuário não logado', 'Somente usuários logados podem acessar esta função!')
            return false
        }
        return true
    }

    adicionarNovoProduto = () => {
        if (this.checarUsuarioLogado()) {
            this.props.navigation.navigate('AddProduto')
        }
    }

    render() {
        return (
            <ImageBackground source={require('../../assets/imgs/backgroundAdministrator.jpg')} style={styles.backgroundImage}>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.botao} onPress={this.adicionarNovoProduto}>
                        <Text style={styles.botaoTexto}>Adicionar novo produto</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
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
        backgroundColor: '#080',
        marginTop: 10,
        padding: 10,
        alignItems: 'center'
    },
    botaoTexto: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
})

const mapStateToProps = ({user}) => {
    return {
        isLoggedIn: user.isLoggedIn
    }
}

export default connect(mapStateToProps)(Administrator)
