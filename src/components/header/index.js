import { useNavigation } from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import styled from 'styled-components';

const Header = () => {
  const navigation = useNavigation() 
console.log("🚀 ~ file: header.js ~ line 5 ~ Header ~ props")
    return (
        <ViewHead    style={{
          flexDirection: "row",
          alignJustify:"center"
        
        }} >
          <Logo  
            source={{uri:'https://www.logolynx.com/images/logolynx/f6/f6770f58c28e7dfb6e87713f4e02aa20.png'}}
          />
        <TextHead>SEPHORA </TextHead>
       

        
       <ViewIcon   onPress={() => navigation.navigate('Panier')  }>
         <Icon  name="shopping-bag" size={24} color="white" marginTop="10px" 
      
         > </Icon>
        </ViewIcon>
      </ViewHead>
    )  
}

const ViewHead = styled.View`
backgroundColor: black;
  `
  const TextHead = styled.Text`
    color: white;
    fontWeight: bold;
    flex:1;
    flexDirection: column;
    fontSize: 28px;
    textAlign:justify;
    lineHeight: 30px;
    alignContent: center;
    alignItems:center;
    marginTop: 12px;
    marginLeft: 60px;

  `
  const Logo = styled.Image`
    width: 40px;
    height: 60px;
    alignContent: flex-start;

   `
   const ViewIcon = styled.TouchableOpacity`
      marginTop: 15px;
      marginRight: 12px;

   `

export default Header