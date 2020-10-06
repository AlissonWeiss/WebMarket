import React, { Component } from 'react'
import {StyleSheet, View, Text} from 'react-native'
import Header from '../components/Header'

class Profile extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header />
                <Text>Profile</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
})

export default Profile