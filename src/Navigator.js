import React from 'react'
import {View} from 'react-native'
import {createAppContainer} from 'react-navigation'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'

import Icon from 'react-native-vector-icons/FontAwesome'
import Feed from './screens/Feed'
import Promotions from './screens/Promotions'
import Cart from './screens/Cart'
import Profile from './screens/Profile'
import AddProduto from './screens/AddProduto'

const TabNavigator = createMaterialBottomTabNavigator(
    {
        Feed: {
            screen: Feed,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{color: tintColor}]} size={25} name={'home'} />
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
                        <Icon style={[{color: tintColor}]} size={25} name={'percent'} />
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
                        <Icon style={[{color: tintColor}]} size={25} name={'shopping-cart'} />
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
            screen: Profile,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{color: tintColor}]} size={25} name={'user'} />
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
            screen: AddProduto,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{ color: tintColor }]} size={25} name={'gears'} />
                    </View>
                ),
                activeColor: '#FFEEF2',
                inactiveColor: '#3e2465',
                barStyle: {
                    backgroundColor: '#585142'
                },
                title: 'Administrador'
            }
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
