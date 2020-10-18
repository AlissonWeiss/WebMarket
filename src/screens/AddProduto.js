import React, {Component} from 'react'
import {ImageBackground, View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Dimensions, Platform, ScrollView, Alert} from 'react-native'
import ImagePicker from 'react-native-image-picker'
import {connect} from 'react-redux'
import {addProduct} from '../store/actions/produtosActions'
import {Picker} from '@react-native-community/picker'
import validaInsercaoProduto from '../validacoes/validaInsercaoProduto'

import IconFontisto from 'react-native-vector-icons/Fontisto'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

const imageDefault = require('../../assets/imgs/noImageProduct.png')

class AddProduto extends Component{

    state = {
        image: imageDefault,
        preco: null,
        categoria: null,
        nomeProduto: null,
        userName: null,
        isImageDefault: true
    }
    componentDidUpdate = prevProps => {
        if (prevProps.loading && !this.props.loading){
            this.setState({
                image: imageDefault,
                preco: null,
                categoria: null,
                nomeProduto: null,
                userName: null,
                isImageDefault: true
            })
            this.props.navigation.navigate('Feed')
        }
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
                this.setState({isImageDefault: false})
            }
        })
    }
    save = async () => {
        var retorno = new validaInsercaoProduto().Validate(this.state)
        if (retorno == '')
        {
            this.props.onAddProduto({
                email: this.props.email,
                telefone: this.props.telefone,
                image: this.state.image,
                preco: this.state.preco,
                categoria: this.state.categoria,
                nomeProduto: this.state.nomeProduto,
                userName: this.props.userName
            })
        }
        else{
            Alert.alert('Erro', retorno)
        }
    }

    ajustarCasasDecimaisPreco = () => {
        if (this.state.preco != null && this.state.preco != ''){
            var preco = parseFloat(this.state.preco).toFixed(2);
            this.setState({preco})
        }
    }

    render () {
        return (
            <ScrollView style={styles.ScrollView}>
                <ImageBackground source={require('../../assets/imgs/backgroundLogin.jpg')} style={styles.backgroundImage}>
                    <View style={styles.container}>
                        <View style={styles.imageContainer} onTouchStart={this.pickImage} >
                            <Image source={this.state.image} style={styles.image}  />
                        </View>
                    </View>

                    <View style={styles.containerInfo}>
                        <SimpleLineIcons name={'user'} style={styles.icon} />
                        <TextInput placeholder='Nome do produto'
                            style={styles.input}
                            //autoFocus={true}
                            value={this.state.nomeProduto}
                            onChangeText={nomeProduto => this.setState({nomeProduto})} />
                    </View>

                    <View style={styles.containerInfo}>
                        <MaterialIcons name={'attach-money'} style={[styles.icon, {fontSize: 15}]} />
                        <TextInput placeholder='Preço'
                            style={styles.input}
                            value={this.state.nome}
                            keyboardType='decimal-pad'
                            onChangeText={preco => this.setState({preco})}
                            onBlur={() => this.ajustarCasasDecimaisPreco()} />
                    </View>

                    <View style={styles.containerInfo}>
                        <IconFontisto name={'email'} style={styles.icon} />
                        <TextInput
                            style={[styles.input, styles.inputDisabled]}
                            value={this.props.email}
                            editable={false} />
                    </View>

                    <View style={styles.containerInfo}>
                        <IconFontisto name={'phone'} style={styles.icon} /> 
                        <TextInput
                            style={[styles.input, styles.inputDisabled]}
                            value={this.props.telefone}
                            editable={false} />
                    </View>
                    
                    <Picker onValueChange={categoria => this.setState({categoria})}
                        selectedValue={this.state.categoria} style={styles.containerInfo} >
                    
                        <Picker.Item label='Selecione uma categoria' value='n/a'/>
                        <Picker.Item label='Automóveis e afins' value='Automóveis e afins'/>
                        <Picker.Item label='Eletrônicos' value='Eletrônicos'/>
                        <Picker.Item label='Imóveis' value='Imóveis'/>
                        <Picker.Item label='Itens para sua casa' value='Itens para sua casa'/>
                        <Picker.Item label='Jogos de tabuleiro' value='Jogos de tabuleiro'/>
                        <Picker.Item label='Moda e beleza' value='Moda e beleza'/>
                        <Picker.Item label='Serviços' value='Serviços'/>
                        <Picker.Item label='Video games e afins' value='Video games e afins'/>
                    </Picker>

                    <TouchableOpacity onPress={this.save} style={[styles.botao, this.props.loading ? styles.botaoDesabilitado : null]} disabled={this.props.loading} >
                        <Text style={styles.botaoTexto}>Salvar</Text>
                    </TouchableOpacity>
                    
                 </ImageBackground>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        height: '100%'
    },
    imageContainer: {
        width: '90%',
        height: Dimensions.get('window').width / 2,
        marginTop: 10,
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width / 2,
        resizeMode: 'center',
        alignSelf: 'center',
        borderRadius: 10
    },
    botao: {
        backgroundColor: '#080',
        marginTop: 10,
        padding: 10,
        alignItems: 'center'
    },
    botaoTexto: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    input: {
        marginTop: 2,
        width: '90%',
        alignItems: 'center',
        height: 40,
        color: '#000'
    },
    inputDisabled: {
        color: '#AAA',
    },
    botaoDesabilitado: {
        backgroundColor: '#AAA'
    },
    backgroundImage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerInfo: {
        width: '90%',
        backgroundColor: '#FFF',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    icon: {
        padding: 10,
    },
    textos: {
        backgroundColor: '#AAA',
        padding: 10,
        width: '85%',
    },
    ScrollView: {
        flex: 1,
        height: '100%',
    },
    categoria: {
        borderRadius: 10
    }
})

const mapStateToProps = ({user, posts}) => {
    return {
        email: user.email,
        userName: user.nome,
        telefone: user.telefone,
        preco: posts.preco,
        loading: posts.isUploading,
        isLoggedIn: user.isLoggedIn,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddProduto: post => dispatch(addProduct(post))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProduto)