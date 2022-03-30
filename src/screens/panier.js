

import React, { useEffect, useState } from 'react'

import { Text, ScrollView } from 'react-native'
import readCart from '../utils/readCart'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components'
import { DescText, TextArticle, TextTitle, TextPrice } from '../components/texts'

import { useFocusEffect } from '@react-navigation/native'
import ImagesProducts from '../components/imagesProducts'
import { PrimaryButton, ThirdButton, SecondaryButton } from '../components/button/buttonPrimary'
import { PrimaryButtonText, SecondaryButtonText } from '../components/texts'
import removeFromCart from '../utils/removeFromCart'

const Panier = ({ route }) => {

  const [art, setArt] = useState([])

  const addArtToState = async () => {
    const allArt = await readCart()
    setArt(allArt)
  }

  useFocusEffect(() => {
    addArtToState()
  })

  useEffect(() => {
    addArtToState()
  }, [])

  useEffect(() => {
    console.log(art)
  }, [art])
  const deletePanier = async f => {
    const allArt = await readCart()

    removeFromCart(f)
    readCart();
  }
  return (

    <>
      <ScrollView>
        {art.map(f => (
          <>
            <ViewPanier>
              <ImagesProducts urlImage={`${f.image}`} />

              <ViewRightContainer>
                <TextArticle>{f.title}</TextArticle>
                <TextPrice>{f.price} $ </TextPrice>
                <ThirdButton
                  onPress={() => {
                    deletePanier(f)
                  }}
                >
                  <SecondaryButtonText> supprimer du panier <Icon name="delete" color="black" size={18} /></SecondaryButtonText>
                </ThirdButton>
              </ViewRightContainer>

            </ViewPanier>
          </>
        ))}
        <SecondaryButton>
          <SecondaryButtonText> Payer  </SecondaryButtonText>
        </SecondaryButton>
      </ScrollView>
    </>
  )


}

const ViewPanier = styled.View`
  flexDirection: row;
  borderWidth: 0.3px;
  backgroundColor: #fff;

`
const ViewRightContainer = styled.View`
  padding: 10px;
  flex:3px;
`

export default Panier