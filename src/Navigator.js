import React from 'react'
import {View} from 'react-native'
import {createAppContainer} from 'react-navigation'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import {createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import Icon from 'react-native-vector-icons/FontAwesome'
import Feed from './screens/Feed'
import Profile from './screens/Profile'
import AddProduto from './screens/AddProduto'
import Login from './screens/Login'
import Register from './screens/Register'
import Administrator from './screens/Administrator'
import SplashScreen from './screens/SplashScreen'

const authRouter = createStackNavigator({
    Login: {screen: Login, navigationOptions: {title: 'Login'}},
    Register: {screen: Register, navigationOptions: {title: 'Registrar'}}
},
{
    initialRouteName: 'Login'
})

const administratorRouter = createStackNavigator({
    Administrator: {screen: Administrator, navigationOptions: {title: 'Administrador'}},
    AddProduto: {screen: AddProduto, navigationOptions: {title: 'Adicionar produto'}},
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
                    backgroundColor: '#228B22'
                },
                title: 'Administrador',
            },
        }
    },
    {
        initialRouteName: 'Feed',
        activeColor: '#f0edf6',
        inactiveColor: '#3e2465',
        barStyle: { 
            backgroundColor: '#6948f4',
         },
    }
);

const SplashRouter = createSwitchNavigator({
    SplashScreen: SplashScreen,
    TabNavigator: TabNavigator
},{
    initialRouteName: 'SplashScreen'
})

export default createAppContainer(SplashRouter)