import React, { Component } from 'react'
import { StyleSheet, View, Image, Dimensions, Text } from 'react-native'

class Post extends Component {
    render() {
        return (
            <View style={StyleSheet.container}>
                <Text style={styles.nomeProduto}>{this.props.nomeProduto}</Text>
                <Image source={{uri: this.props.image}} style={styles.image} />
                <Text style={styles.bottomInformations}>Preço: R$ {this.props.preco}</Text>
                <Text style={styles.bottomInformations}>Tipo de produto: {this.props.tipoProduto}</Text>
                <Text style={styles.bottomInformations}>Unidade de controle: {this.props.unidadeControle}</Text>
                <Text style={{fontWeight: "bold"}}>________________________________________________________</Text>
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
})

export default Post