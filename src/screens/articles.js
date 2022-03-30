import React, { useEffect, useState } from 'react'

import { ScrollView,View,Text , FlatList} from 'react-native'
import styled from 'styled-components'
import axios from 'axios'
import readCart from '../utils/readCart'
import addToCart from '../utils/addToCart'
import removeFromCart from '../utils/removeFromCart'
import ImagesProducts from '../components/imagesProducts'
import  { PrimaryButton, SecondaryButton }  from '../components/button/buttonPrimary'
import { PrimaryButtonText } from '../components/texts'
import Icon from 'react-native-vector-icons/FontAwesome';
import { DescText,TextArticle, TextTitle, TextPrice } from '../components/texts'

const Article = ({ navigation }) => {
 
  const [articles, setArticles] = useState([])
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://fakestoreapi.com/products?sort=asc',
      params: {
        limit: 20,
        offset,
        ts: 1,
      
      }
    })
      .then(response => {
        setArticles([...articles, ...response.data])
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }, [offset])


  const checkPanier = async item => {
    const allArt = await readCart()

    const index = allArt.map(f => f.id).findIndex(itemId => itemId === item.id)
    if (index === -1) {
      addToCart(item)
    } else {
      removeFromCart(item)
    }
  }

  return(
    <>
 
     
      <FlatList
        data={articles}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}    
        onEndReached={() => setOffset(offset + 20)}
        renderItem={({ item }) => (  
           
            <Button
              onPress={() => navigation.navigate('Details', { id: item.id })}
              title = "voir plus"
            >
            <ImagesProducts
              urlImage={`${item.image}`}
            />
          
          <ViewRightContainer>
            
            <TextArticle>{item.title}</TextArticle>
             <TextPrice> {item.price} $</TextPrice>
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

  `








Article.propTypes = {}

export default Article