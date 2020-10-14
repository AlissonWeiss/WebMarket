import React, {Component} from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

class SplashScreen extends Component {
    componentDidMount = () => {
        setTimeout(
            () => {this.props.navigation.navigate('Feed') },
            2000 //2 segundos
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../../assets/imgs/logoSplash.png')} style={styles.image} />

                <Text style={styles.header}>
                    WebMarket
                </Text>
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
    image: {
        height: 200,
        width: 200,
        resizeMode: 'contain'
    },
    header: {
        fontSize: 50,
        fontWeight: 'bold'
    }
})

export default SplashScreen