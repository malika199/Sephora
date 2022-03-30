import React from 'react'

import { NavigationContainer } from '@react-navigation/native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome';

import Article from '../../screens/articles'
import Login from '../../screens/login'

import Panier from '../../screens/panier'

import HomeStack from './homestack'
import Header from '../../components/header';

const BottomTab = createBottomTabNavigator()

const Routes = () => {
    return(
        <NavigationContainer>
                <Header/>

            <BottomTab.Navigator>
        

            <BottomTab.Screen name='Home' component={HomeStack}
             options={{
                    headerShown:false ,
                    tabBarIcon: ({size, color}) => (<Icon name="home" color="black"
                    size={24} />),
                    tabBarActiveTintColor: 'black',
                    fontWeight: 'bold',
                     tabBarStyle:{
                            inactiveTintColor: '#d3d3d3',
                            paddingVertical: 5,
                            borderTopLeftRadius:15,
                            borderTopRightRadius:15,
                            height:50,
                            fontWeight: 'bold',
                            borderColor:'black',
                     
                        }
                                  
                }}
              

               
               /> 

                <BottomTab.Screen color="black" name='Article' component={Article}
                options={{
                    tabBarIcon: ({size, color}) => (<Icon name="shopping-bag" color="black"
                    size={24} />),
                    tabBarActiveTintColor: 'black',
                    fontWeight: 'bold',
                     tabBarStyle:{
                            inactiveTintColor: '#d3d3d3',
                            paddingVertical: 5,
                            borderTopLeftRadius:15,
                            borderTopRightRadius:15,
                            height:50,
                            fontWeight: 'bold',
                            borderColor:'black',
                     
                        }
                
                }}
               
                /> 
                 <BottomTab.Screen color="black" name='Mon panier' component={Panier}
                options={{
                    tabBarIcon: ({size, color}) => (<Icon name="shopping-cart" color="black"
                    size={24} />),
                    tabBarActiveTintColor: 'black',
                    fontWeight: 'bold',
                     tabBarStyle:{
                            inactiveTintColor: '#d3d3d3',
                            paddingVertical: 5,
                            borderTopLeftRadius:15,
                            borderTopRightRadius:15,
                            height:50,
                            fontWeight: 'bold',
                            borderColor:'black',
                     
                        }
                }}
               
                /> 

                <BottomTab.Screen color="black" name='Mon compte' component={Login}
                options={{
                    tabBarIcon: ({size, color}) => (<Icon name="user-circle" color="black"
                    size={24} />),
                    tabBarActiveTintColor: 'black',
                    fontWeight: 'bold',
                     tabBarStyle:{
                            inactiveTintColor: '#d3d3d3',
                            paddingVertical: 5,
                            borderTopLeftRadius:15,
                            borderTopRightRadius:15,
                            height:50,
                            fontWeight: 'bold',
                            borderColor:'black',
                     
                        }
                }}
                /> 




            </BottomTab.Navigator>

        </NavigationContainer>
    )
}


export default Routes

