import React, { Component } from 'react'
import { StyleSheet, View, Image, Dimensions, Text } from 'react-native'
import Autor from './Autor'

class Post extends Component {

    state = {
        imageUser: null
    }

    render() {
        return (
            <View style={StyleSheet.container}>
                <Text style={styles.nomeProduto}>{this.props.nomeProduto}</Text>
                <Image source={{uri: this.props.image}} style={styles.image} />
                <Text style={styles.bottomInformations}>Preço: R$ {this.props.preco}</Text>
                <Text style={styles.bottomInformations}>Tipo de produto: {this.props.tipoProduto}</Text>
                <Text style={styles.bottomInformations}>Unidade de controle: {this.props.unidadeControle}</Text>
                <View style={styles.contato}>
                    <Text>Contato</Text>
                    <Autor telefone={this.props.telefone} email={this.props.email} userName={this.props.userName}></Autor>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 3 / 5,
        resizeMode: 'contain',
        marginTop: 10,
        borderRadius: 8,
    },
    nomeProduto: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
    },
    bottomInformations: {
        fontSize: 15,
        textAlign: 'center',
        color: 'gray',
        fontWeight: 'bold',
        fontStyle: "italic"
    },
    contato: {
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#ABC'
    }
})
export default Post
