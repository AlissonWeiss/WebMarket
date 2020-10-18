import React, { Component } from 'react'
import {StyleSheet, View, Image, Dimensions, Text } from 'react-native'
import Autor from './Autor'

class Post extends Component {

    state = {
        imageUser: null
    }

    formatData = data => {
        const formater = new Intl.DateTimeFormat('br');
        this.props.dataPublicacao = formater.formatToParts(data)
    }

    render() {
        return (
            <View style={StyleSheet.container}>
                <Text style={styles.nomeProduto}>{this.props.nomeProduto}</Text>
                <Image source={{uri: this.props.image}} style={styles.image} />
                <Text style={styles.bottomInformations}>R$ {this.props.preco}</Text>
                <Text style={styles.bottomInformations}>Categoria: {this.props.categoria}</Text>
                <Text style={styles.bottomInformations}>Data da publicação: {this.props.dataPublicacao}</Text>
                <View style={styles.contato}>
                    <Text style={styles.titleContato}>Contato</Text>
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
        color: 'black',
        fontWeight: 'bold',
        fontStyle: "italic"
    },
    contato: {
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#ABC'
    },
    titleContato: {
        textAlign: 'left',
        fontSize: 25,
        fontWeight: 'bold',
        borderTopStartRadius: 10,
        backgroundColor: '#909090',
    },
})
export default Post
