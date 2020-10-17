import React, {Component} from 'react'
import {connect} from 'react-redux'
import {View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'

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
            <View style={styles.container}>
                <TouchableOpacity style={styles.botao} onPress={this.adicionarNovoProduto}>
                    <Text style={styles.botaoTexto}>Adicionar novo produto</Text>
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
})

const mapStateToProps = ({user}) => {
    return {
        isLoggedIn: user.isLoggedIn
    }
}

export default connect(mapStateToProps)(Administrator)
