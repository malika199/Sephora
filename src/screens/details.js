import axios from 'axios'

import React, { useEffect, useState } from 'react'
import readCart from '../utils/readCart'
import addToCart from '../utils/addToCart'
import removeFromCart from '../utils/removeFromCart'
import { Text, Image, ScrollView, View } from 'react-native'

import styled from 'styled-components'
import { PrimaryButton, SecondaryButton } from '../components/button/buttonPrimary'
import ImageDetails from '../components/ImagesDtails'
// import TextPrice from '../components/textPrice'
import { DescText, TextTitle, TextPrice, PrimaryButtonText, SecondaryButtonText } from '../components/texts'



const Details = ({ route }) => {
  const [article, setArticle] = useState({})
  const { params: { id } } = route
  console.log('🚀 ~ file: details.js ~ line 8 ~ Details ~ id', id)
  useEffect(() => {
    axios({
      method: 'GET',
      url: `https://fakestoreapi.com/products/${id}`,

    })
      .then(response => {
        setArticle(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])


  const checkPanier = async item => {
    const allArt = await readCart()

    const index = allArt.map(f => f.id).findIndex(itemId => itemId === article.id)
    if (index === -1) {
      addToCart(article)
    } else {
      removeFromCart(article)
    }
  }
  return (
    <>
      <ScrollView>

        <ImageDetails
          urlImage={`${article?.image}`}
        />

        <TextTitle> {article?.title}  </TextTitle>
        <DescText>{article?.description} </DescText>
        <TextPrice> Prix : {article?.price} $ </TextPrice>
        <ViewP>



          <PrimaryButton
            onPress={() => {
              checkPanier(article)
            }}
          >
            <PrimaryButtonText> Ajouter au panier  </PrimaryButtonText>
          </PrimaryButton>


          <SecondaryButton>
            <SecondaryButtonText> Payer  </SecondaryButtonText>
          </SecondaryButton>
        </ViewP>
      </ScrollView>
    </>
  )



}

const ViewP = styled.View`
  
    flexDirection: row;
    alignSelf:flex-end;
    marginLeft:10px;  `


export default Details