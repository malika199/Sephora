import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../../screens/home'

import Article from '../../screens/articles'
import ArticlesByCat from '../../screens/articlesByCat'

import Details from '../../screens/details'

import Icon from 'react-native-vector-icons/FontAwesome';
import Login from '../../screens/login'
import Panier from '../../screens/panier'
import  FlashMessage  from  "react-native-flash-message" ;
import Header from '../../components/header'

const Stack = createNativeStackNavigator()

const HomeStack = () => {
  return (
<>
    <Stack.Navigator>
      <Stack.Screen                
 name='Home' component={Home}   
         options={{
          headerShown:false ,

          tabBarIcon: ({size, color}) => (<Icon name="home" color="black"
          size={24} />),
          
          tabBarActiveTintColor: 'black',
          activeTintFontWeight: 'bold',
          tabBarStyle:{
            inactiveTintColor: '#d3d3d3',
            paddingVertical: 5,
            borderTopLeftRadius:15,
            borderTopRightRadius:15
            ,backgroundColor:'gray',
            height:50}
        }}

      />

     <Stack.Screen 
           
    name='articlesByCat' component={ArticlesByCat} />

     
       <Stack.Screen color="black"  name='Article' component={Article}  
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

      <Stack.Screen  name='Details' component={Details} /> 
      <Stack.Screen color="black" name='Panier' component={Panier}
                options={{
                    tabBarIcon: ({size, color}) => (<Icon name="shopping-search" color="black"
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
     
      <Stack.Screen color="black" name='Mon compte' component={Login}
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



    </Stack.Navigator>
  
<FlashMessage position = "top"  />
</>
  )
}


export default HomeStack