import React, { Component } from 'react'
import {StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native'
import {addFabricante} from '../store/actions/fabricanteActions'
import {connect} from 'react-redux'

class AddFabricante extends Component {

    state = {
        codigoFabricante: '',
        nomeFabricante: ''
    }

    CodigoFabricanteBlur = codigoFabricante => {
        
    } 

    save = async () => {
        this.props.onAddFabricante({
            codigoFabricante: this.props.codigoFabricante,
            nomeFabricante: this.props.nomeFabricante,
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput placeholder='Código' style={styles.input}
                 onBlur={codigo => this.CodigoFabricanteBlur(codigo)}
                 onChangeText={codigoFabricante => this.setState({codigoFabricante})}>
                </TextInput>

                <TextInput placeholder='Fabricante' style={styles.input}
                 onChangeText={Fabricante => this.setState({Fabricante})}>
                </TextInput>

                <TouchableOpacity>
                    <Text>Salvar</Text>
                </TouchableOpacity>
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
    },
    input: {
        marginTop: 2,
        width: '90%',
        alignItems: 'center',
        height: 40,
        maxHeight: 40,
    }
})

const mapStateToProps = ({fabricante}) => {
    return {
        codigoFabricante: fabricante.codigoFabricante,
        nomeFabricante: nomeFabricante,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddFabricante: fabricante => dispatch(addFabricante(fabricante))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddFabricante)