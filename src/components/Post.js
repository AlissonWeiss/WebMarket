import React, { Component } from 'react'
import { StyleSheet, View, Image, Dimensions } from 'react-native'

class Post extends Component {
    render() {
        return (
            <View style={StyleSheet.container}>
                <Image source={this.props.image} style={styles.image} />
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