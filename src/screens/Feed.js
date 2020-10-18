import React, { Component } from 'react'
import {connect} from 'react-redux'
import {StyleSheet, FlatList, View} from 'react-native'
import Header from '../components/Header'
import Post from '../components/Post'
import {getPosts} from '../store/actions/produtosActions'

class Feed extends Component {
    componentDidMount = () => {
        this.props.onGetPosts()
    }
    render() {
        return (
            <View style={styles.container}>
                <Header />
                <FlatList
                    data={this.props.posts}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={({item, index}) =>
                <View style={styles.post, index % 2 == 0 ? styles.postPar : styles.postImpar}>
                    <Post key={item.id} {...item} /> 
                </View>} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    post: {
        borderRadius: 10,
    },
    postImpar: {
        backgroundColor: '#FFF',
        borderBottomColor: '#999999',
        borderBottomWidth: 3
    },
    postPar: {
        backgroundColor: '#DDD',
        borderBottomColor: '#999999',
        borderBottomWidth: 3
    },
})

const mapStateToProps = ({ posts }) => {
    return {
        posts: posts.posts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetPosts: () => dispatch(getPosts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed)