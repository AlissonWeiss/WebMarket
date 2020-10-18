import React, {Component } from 'react'
import {StyleSheet, Text, View, Platform, Image} from 'react-native'
import icon from '../../assets/imgs/logo.png'
import {connect} from 'react-redux'

class Header extends Component{
    render() {
        const name = this.props.name || 'Visitante'
        
        return(
            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    <Image source={icon} style={styles.image} />
                    <Text style={styles.title}>WebMarket</Text>
                </View>

                <View style={styles.userContainer}>
                    <Text style={styles.user}>{name}</Text>
                    <Image style={styles.avatar} source={this.props.image ? {uri: this.props.image } : require('../../assets/imgs/noImage.png')} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS == 'ios' ? 20 : 0,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#BBB',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        height: 30,
        width: 30,
        resizeMode: 'contain',
    },
    title: {
        paddingLeft: 10,
        color: '#000',
        height: 25,
        fontSize: 20
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    user: {
        fontSize: 10,
        color: '#888'
    },
    avatar: {
        width: 30,
        height: 30,
        marginLeft: 10,
        borderRadius: 10
    }
})

const mapStateToProps = ({ user }) => {
    return {
        name: user.nome,
        image: user.image
    }
}

export default connect(mapStateToProps)(Header)