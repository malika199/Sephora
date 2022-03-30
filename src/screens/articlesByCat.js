import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { Text ,FlatList} from 'react-native'
import styled from 'styled-components'
import readCart from '../utils/readCart'
import addToCart from '../utils/addToCart'
import removeFromCart from '../utils/removeFromCart'
import  { PrimaryButton, SecondaryButton }  from '../components/button/buttonPrimary'
import { PrimaryButtonText } from '../components/texts'
import ImagesProducts from '../components/imagesProducts'
// import TextPrice from '../components/textPrice'
import { DescText, TextTitle, TextPrice } from '../components/texts'

import Icon from 'react-native-vector-icons/FontAwesome';

const Details = ({ route, navigation}) => {
  const [article, setArticle] = useState({})
  const { params: { category } } = route
  console.log('🚀 ~ file: details.js ~ line 8 ~ Details ~ categorie', category)
  useEffect(() => {
    axios({
      method: 'GET',
      url: `https://fakestoreapi.com/products/category/${category}`,
       params: {
        ts: 1,
  
      }
    })
      .then(response => {
        setArticle(response.data)
     })
     .catch(error => {
        console.log(error)
     })
 }, [])
       
 console.log('article',article);

 const checkPanier = async item => {
  const allArt = await readCart()

  const index = allArt.map(f => f.id).findIndex(itemId => itemId === item.id)
  if (index === -1) {
    addToCart(item)
  } else {
    removeFromCart(item)
  }
}

    return (
      <>

      <FlatList
        data={article}
        numColumns={1}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (

          <Button
            onPress={() => navigation.navigate('Details', { id: item.id })}
            title = "voir plus"
          >
      
          <ImagesProducts
             urlImage={`${item?.image}`} 
          /> 
          
          <ViewRightContainer>

           <TextArticle>{item?.title}</TextArticle>
           <TextPrice>{item?.price} $ </TextPrice>
           <PrimaryButton 
               onPress={() => {
                checkPanier(item)
              }}
            >
            <PrimaryButtonText>Ajouter au panier <Icon name="shopping-cart"
                    size={18} /></PrimaryButtonText>
            </PrimaryButton> 
            
         </ViewRightContainer>
        
         </Button>

        )}
        
        /> 
      
      </>
    )



}

const Button = styled.TouchableOpacity`
flexDirection: row;
  borderWidth: 1;
  borderColor: #d1d1d1;
  borderRadius: 10px;
  backgroundColor: #fff;
  marginVertical: 5px;
  magin:3% 2%;
  shadowOpacity:0.2;
  shadowRaduis:1;
  shadowOffset:{
  width:1px;
  height:3px;
  }
`
const ViewRightContainer = styled.View`
  padding: 10px;
  flex:3;
`
const TextArticle = styled.Text`
  fontSize: 14px;
  color:black;
  

`
export default Details