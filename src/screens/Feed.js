import React, { Component } from 'react'
import {StyleSheet, FlatList, View} from 'react-native'
import Header from '../components/Header'
import Post from '../components/Post'

class Feed extends Component {
    state = {
        posts: [{
            id: 0,
            nickname: 'Alisson',
            email: 'weiss.alisson@gmail.com',
            image: require('../../assets/imgs/logo.png'),
        },
        {
            id: 1,
            nickname: 'Weiss',
            email: 'alissonweiss@id.uff.br',
            image: require('../../assets/imgs/logo.png')
        },
        {
            id: 2,
            nickname: 'Weiss',
            email: 'alissonweiss@id.uff.br',
            image: require('../../assets/imgs/logo.png')
        },
        {
            id: 3,
            nickname: 'Weiss',
            email: 'alissonweiss@id.uff.br',
            image: require('../../assets/imgs/logo.png')
        }
    ]
    }

    render() {
        return (
            <View style={styles.container}>
                <Header />
                <FlatList
                    data={this.state.posts}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({item}) =>
                <Post key={item.id} {...item} />} />
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

export default Feed