import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Dimensions, Platform, ScrollView, Alert} from 'react-native'
import ImagePicker from 'react-native-image-picker'
import {connect} from 'react-redux'
import {addProduct} from '../store/actions/produtosActions'
import {Picker} from '@react-native-community/picker'
import validaInsercaoProduto from '../validacoes/validaInsercaoProduto'

class AddProduto extends Component{
    state = {
        image: null,
        preco: null,
        categoria: null,
        nomeProduto: null,
        userName: null,
    }
    componentDidUpdate = prevProps => {
        if (prevProps.loading && !this.props.loading){
            this.setState({
                image: null,
                preco: null,
                categoria: null,
                nomeProduto: null,
                userName: null
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
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.imageContainer} onTouchStart={this.pickImage} >
                        <Image source={this.state.image} style={styles.image}  />
                    </View>
                </View>

                <TextInput placeholder='Nome do produto'
                    style={styles.input}
                    value={this.state.nomeProduto}
                    onChangeText={nomeProduto => this.setState({nomeProduto})}/>

                <TextInput placeholder='Preço'
                    style={styles.input}
                    value={this.state.preco}
                    keyboardType="numeric"
                    onChangeText={preco => this.setState({preco})}
                    onBlur={() => this.ajustarCasasDecimaisPreco()}/>

                <TextInput style={styles.input}
                    value={this.props.email}
                    editable={false}/>

                <TextInput style={styles.input}
                    value={this.props.telefone}
                    editable={false}/>

                <Picker onValueChange={categoria => this.setState({categoria})}
                        selectedValue={this.state.categoria}>
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
        resizeMode: 'center',
        alignSelf: 'center',
        borderRadius: 10
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
    },
    botaoDesabilitado: {
        backgroundColor: '#AAA'
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