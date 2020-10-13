import React, { Component } from 'react'
import { StyleSheet, View, Image, Dimensions, Text } from 'react-native'

class Post extends Component {
    render() {
        return (
            <View style={StyleSheet.container}>
                <Image source={{uri: this.props.image}} style={styles.image} />
                <Text>Preço: R$ {this.props.preco}</Text>
                <Text>Fabricante: {this.props.fabricante}</Text>
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
        marginTop: 10
    }
})

export default Post