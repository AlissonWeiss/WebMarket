import React from 'react'
import {View} from 'react-native'
import {createAppContainer} from 'react-navigation'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import {createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import Icon from 'react-native-vector-icons/FontAwesome'
import Feed from './screens/Feed'
import Promotions from './screens/Promotions'
import Cart from './screens/Cart'
import Profile from './screens/Profile'
import AddProduto from './screens/AddProduto'
import Login from './screens/Login'
import Register from './screens/Register'
import Administrator from './screens/Administrator'
import AddFabricante from './screens/AddFabricante'

const authRouter = createStackNavigator({
    Login: {screen: Login, navigationOptions: {title: 'Login'} },
    Register: {screen: Register, navigationOptions: {title: 'Registrar'}}
},
{
    initialRouteName: 'Login'
})

const administratorRouter = createStackNavigator({
    Administrator: {screen: Administrator, navigationOptions: {title: 'Administrador'}},
    AddProduto: {screen: AddProduto, navigationOptions: {title: 'Adicionar produto'}},
    AddFabricante: {screen: AddFabricante, navigationOptions: {title: 'Adicionar fabricante'}}
})

const loginOrProfileRouter = createSwitchNavigator({
    Profile: Profile,
    Auth: authRouter
},
{
    initialRouteName: 'Auth'
})

const administratorSwitchRouter = createSwitchNavigator({
    Administrator: administratorRouter,
    AddProduto: administratorRouter,
    ExcProduto: administratorRouter
},
{
    initialRouteName: 'Administrator'
})

const TabNavigator = createMaterialBottomTabNavigator(
    {
        Feed: {
            screen: Feed,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{color: tintColor}]} size={20} name={'home'} />
                    </View>
                ),
                activeColor: '#ffffff',
                inactiveColor: '#a3c2fa',
                barStyle: {
                    backgroundColor: '#2163f6',
                },
                title: 'Início'
            }
        },
        Promocoes: {
            screen: Promotions,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{color: tintColor}]} size={20} name={'percent'} />
                    </View>
                ),
                activeColor: '#ffffff',
                inactiveColor: '#a3c2fa',
                barStyle: {
                    backgroundColor: '#2c6d6a',
                },
                title: 'Promoções'
            },
        },
        Carrinho: {
            screen: Cart,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{color: tintColor}]} size={20} name={'shopping-cart'} />
                    </View>
                ),
                activeColor: '#ffffff',
                inactiveColor: '#ebaabd',
                barStyle: {
                    backgroundColor: '#d13560'
                },
                title: 'Carrinho'
            }
        },
        Perfil: {
            screen: loginOrProfileRouter,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{color: tintColor}]} size={20} name={'user'} />
                    </View>
                ),
                activeColor: '#ffffff',
                inactiveColor: '#92c5c2',
                barStyle: {
                    backgroundColor: '#696969'
                },
                title: 'Meu perfil'
            }
        },
        Administrador: {
            screen: administratorSwitchRouter,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{color: tintColor}]} size={20} name={'gear'} />
                    </View>
                ),
                activeColor: '#ffffff',
                inactiveColor: '#92c5c2',
                barStyle: {
                    backgroundColor: '#696969'
                },
                title: 'Administrador',
            },
        }
    }
    ,
    {
        initialRouteName: 'Feed',
        activeColor: '#f0edf6',
        inactiveColor: '#3e2465',
        barStyle: { 
            backgroundColor: '#6948f4',
         },

    }
);


export default createAppContainer(TabNavigator);
