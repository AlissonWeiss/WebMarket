import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Dimensions, Platform, ScrollView, Alert, Button} from 'react-native'
import ImagePicker from 'react-native-image-picker'
import {connect} from 'react-redux'
import {addProduct} from '../store/actions/produtosActions'

class AddProduto extends Component{
    state = {
        image: null,
        preco: null,
    }
    
    pickImage = () => {
        ImagePicker.showImagePicker({
            title: 'Escolha a imagem',
            maxHeight: 600,
            maxWidth: 600,
            takePhotoButtonTitle: 'Tirar foto',
            chooseFromLibraryButtonTitle: 'Escolher da galeria',
            cancelButtonTitle: 'Cancelar',
        }, res => {
            if (!res.didCancel){
                this.setState({image : {uri: res.uri, base64: res.data}})
            }
        })
    }
    save = async () => {
        this.props.onAddProduto({
            id: Math.random,
            name: this.props.name,
            email: this.props.email,
            image: this.state.image,
        })

        this.setState({image: null})

        this.props.navigation.navigate('Feed')
    }

    render () {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Produto</Text>
                    <View style={styles.imageContainer}>
                        <Image source={this.state.image} style={styles.image}/>
                    </View>
                </View>
                <TouchableOpacity onPress={this.pickImage} style={styles.botao}>
                    <Text>Escolha a imagem</Text>
                </TouchableOpacity>
                <TextInput placeholder='Preço'
                 style={styles.input}
                 value={this.state.preco}
                 keyboardType="numeric"
                 onChangeText={preco => this.setState({preco})}/>
                 <TouchableOpacity onPress={this.save} style={styles.botao}>
                    <Text style={styles.botaoSalvar}>Salvar</Text>
                 </TouchableOpacity>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginTop: Platform.OS == 'ios' ? 30: 10,
        fontWeight: 'bold'
    },
    imageContainer: {
        width: '90%',
        height: Dimensions.get('window').width / 2,
        backgroundColor: '#EEE',
        marginTop: 10
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width / 2,
        resizeMode: 'center'
    },
    botao: {
        marginTop: 5,
        padding: 10,
        backgroundColor: '#4286f4',
        alignItems: 'center'
    },
    botaoSalvar: {
        fontSize: 20,
        color: '#FFF'
    },
    input: {
        marginTop: 2,
        width: '90%',
        alignItems: 'center',
        height: 50,
    }
})

const mapStateToProps = ({user}) => {
    return {
        email: user.email,
        name: user.name
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddProduto: post => dispatch(addProduct(post))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProduto)