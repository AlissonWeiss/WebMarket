import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, TextInput, Alert, Image, Dimensions } from 'react-native'
import ImagePicker from 'react-native-image-picker'
import {connect} from 'react-redux'
import {createUser} from '../store/actions/userActions'

import validaRegistro from '../validacoes/validaRegistro'

class Register extends Component {
    state = {
        image: null,
        nome: '',
        password: '',
        passwordConfirmacao: '',
        email: '',
        telefone: '',
    }

    salvar = user => {
        var retornoValidacao = new validaRegistro().Validate(user)
        if (retornoValidacao == ''){
            this.props.onCreateUser(user)
        }
        else{
            Alert.alert('Erro', retornoValidacao)
        }
    }

    componentDidUpdate = prevProps => {
        if (prevProps.isLoading && !this.props.isLoading) {
            this.setState({
                image: null,
                nome: '',
                password: '',
                passwordConfirmacao: '',
                email: '',
                telefone: '',
            })
            this.props.navigation.navigate('Profile')
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

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imageContainer} onTouchStart={this.pickImage} >
                    <Image source={this.state.image} style={styles.image}  />
                </View>
                
                <TextInput placeholder='Nome'
                    style={styles.input}
                    autoFocus={true}
                    value={this.state.nome}
                    onChangeText={nome => this.setState({nome})} />

                <TextInput placeholder='Email'
                    style={styles.input}
                    value={this.state.email}
                    keyboardType='email-address'
                    onChangeText={email => this.setState({email})} />

                <TextInput placeholder='Telefone'
                    style={styles.input}
                    value={this.state.telefone}
                    keyboardType='phone-pad'
                    onChangeText={telefone => this.setState({telefone})}
                    maxLength={12} />

                <TextInput placeholder='Senha'
                    style={styles.input}
                    value={this.state.password}
                    secureTextEntry={true}
                    onChangeText={password => this.setState({password})} />

                <TextInput placeholder='Confirme sua senha'
                    style={styles.input}
                    value={this.state.passwordConfirmacao}
                    secureTextEntry={true}
                    onChangeText={passwordConfirmacao => this.setState({passwordConfirmacao})} />

                <TouchableOpacity style={styles.botao} onPress={() => this.salvar(this.state)}>
                    <Text style={styles.botaoTexto}>Registrar</Text>
                </TouchableOpacity>
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
    botao: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4'
    },
    botaoTexto: {
        fontSize: 20,
        color: '#FFF'
    },
    input: {
        marginTop: 20,
        width: '90%',
        backgroundColor: '#EEE',
        height: 40,
        borderWidth: 1,
        borderColor: '#333',
        paddingLeft: 15
    },
    imageContainer: {
        width: '90%',
        height: Dimensions.get('window').width / 2,
        backgroundColor: '#EEE',
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width / 2,
        resizeMode: 'center',
        alignSelf: 'center',
        borderRadius: 10
        
    },
})

const mapStateToProps = ({user}) => {
    return {
        isLoading: user.isLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCreateUser: user => dispatch(createUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)