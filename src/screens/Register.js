import React, {Component} from 'react'
import {ImageBackground, View, Text, StyleSheet, TouchableOpacity, TextInput, Alert, Image, Dimensions } from 'react-native'
import ImagePicker from 'react-native-image-picker'
import {connect} from 'react-redux'
import {createUser} from '../store/actions/userActions'

import IconFontisto from 'react-native-vector-icons/Fontisto'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

import validaRegistro from '../validacoes/validaRegistro'

class Register extends Component {
    state = {
        image: require('../../assets/imgs/noImage.png'),
        nome: '',
        password: '',
        passwordConfirmacao: '',
        email: '',
        telefone: '',
        isImageDefault: true
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
                this.setState({isImageDefault : false})
            }
        })
    }

    render() {
        return (
            <ImageBackground source={require('../../assets/imgs/backgroundRegister.jpg')} style={styles.backgroundImage}>
                <View style={styles.container}>
                    <View style={styles.imageContainer} onTouchStart={this.pickImage} >
                        <Image source={this.state.image} style={styles.image}  />
                    </View>
                    
                    <View style={styles.containerInput}>
                        <SimpleLineIcons name={'user'} style={styles.icon} />
                        <TextInput placeholder='Nome'
                            style={styles.input}
                            autoFocus={true}
                            value={this.state.nome}
                            onChangeText={nome => this.setState({nome})} />
                    </View>
                    
                    <View style={styles.containerInput} >
                        <IconFontisto name={'email'} style={styles.icon} />
                        <TextInput placeholder='Email'
                            style={styles.input}
                            value={this.state.telefone}
                            keyboardType='email-address'
                            onChangeText={email => this.setState({email})} />
                    </View>

                    <View style={styles.containerInput} >
                        <IconFontisto name={'phone'} style={styles.icon} />
                        <TextInput placeholder='Telefone'
                            style={styles.input}
                            value={this.state.telefone}
                            keyboardType='phone-pad'
                            onChangeText={telefone => this.setState({telefone})}
                            maxLength={12} />
                    </View>

                    <View style={styles.containerInput}>
                        <MaterialCommunityIcons name={'security'} style={styles.icon} />
                        <TextInput placeholder='Senha'
                            style={styles.input}
                            value={this.state.password}
                            secureTextEntry={true}
                            onChangeText={password => this.setState({password})} />
                    </View>

                    <View style={styles.containerInput}>
                        <MaterialCommunityIcons name={'security'} style={styles.icon} />
                        <TextInput placeholder='Confirme sua senha'
                            style={styles.input}
                            value={this.state.passwordConfirmacao}
                            secureTextEntry={true}
                            onChangeText={passwordConfirmacao => this.setState({passwordConfirmacao})} />
                    </View>

                    <TouchableOpacity style={styles.botao} onPress={() => this.salvar(this.state)}>
                        <Text style={styles.botaoTexto}>Registrar</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 20,
        width: '90%',
        alignItems: 'center'
    },
    botao: {
        backgroundColor: '#080',
        marginTop: 10,
        padding: 10,
        alignItems: 'center'
    },
    botaoTexto: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#FFF',
        padding: 10,
        width: '85%'
    },
    imageContainer: {
        width: Dimensions.get('window').width / 2,
        height: Dimensions.get('window').width / 2,
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width / 2,
        resizeMode: 'center',
        alignSelf: 'center',
        borderRadius: 10,
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerInput: {
        width: '100%',
        backgroundColor: '#FFF',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    icon: {
        padding: 10,
    }
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