import React from 'react'

import { ScrollView, View, Text, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components'

import Images from '../components/Images';
import { TitleText, TextHome } from '../components/texts';

const Home = ({ navigation }) => {

  return (
    <>
      <ScrollView
        style={{ backgroundColor: 'white' }}
      >


        <TitleText>Choisissez une catégorie </TitleText>
        <ViewContainerHome>



          <ViewContainer>
            <Container>
              <Button
                onPress={() => navigation.navigate('articlesByCat', { category: "women's clothing" })}
              >

                <Images urlImage="https://img.ltwebstatic.com/images3_pi/2022/03/07/164664524458ceabd2744a8ba31d2c9877229123f9_thumbnail_900x.webp" />
                <TextHome> women's clothing </TextHome>

              </Button>
            </Container>
          </ViewContainer>


          <ViewContainer>
            <Container>

              <Button
                onPress={() => navigation.navigate('articlesByCat', { category: "men's clothing" })}
              >
                <Images urlImage="https://i8.amplience.net/i/jpl/jd_556762_a?qlt=92&w=950&h=1212&v=1&fmt=auto" />
                <TextHome> men's clothing </TextHome>
              </Button>
            </Container>

          </ViewContainer>
        </ViewContainerHome>

        <ViewContainerHome>

          <ViewContainer>
            <Container>

              <Button
                onPress={() => navigation.navigate('articlesByCat', { category: "jewelery" })}
              >
                <Images urlImage="https://img.edenly.com/produit/porte/PC6A9760c-z.jpg?_gl=1*1m2ngz*_gcl_aw*R0NMLjE2NDgxNjM5NTEuQ2p3S0NBandyZkNSQmhBWEVpd0Fua21LbWVJcHNDNFpXR0JJaXpNYjlQcHRnNjJEQ2pCTDlkemV6UHZjQWRUOEpGZEFXUGx1Q1lCTWl4b0NCRDBRQXZEX0J3RQ..*_ga*MTg3NzU5NDEyNy4xNjQ4MTYzOTUx*_ga_8CPY8KXX7V*MTY0ODE2Mzk1MS4xLjAuMTY0ODE2Mzk1MS4w" />
                <TextHome> jewelery </TextHome>
              </Button>
            </Container>

          </ViewContainer>

          <ViewContainer>
            <Container>

              <Button
                onPress={() => navigation.navigate('articlesByCat', { category: "electronics" })}
              >
                <Images urlImage="https://i0.wp.com/onhike.com/wp-content/uploads/2021/07/buy-the-best-electronic-products-online.jpg?fit=680%2C408&ssl=1" />
                <TextHome> electronics </TextHome>
              </Button>
            </Container>

          </ViewContainer>

        </ViewContainerHome>

      </ScrollView>
    </>

  )

}


Home.propTypes = {}


const Container = styled.View`
  overflow: hidden;
  `

const ViewContainer = styled.View`
    overflow: hidden;
    backgroundColor:white;
    alignContent:center;
    borderRadius: 1px;
    flex:1;
    flexDirection: column;
    alignItems:center;
    width: 250px;
    height: 260px;
    margin: 5px;
    border : 0.1px; 
     borderColor: black;

  `
const ViewContainerHome = styled.View`
    overflow: hidden;
    alignItems:center;
    flexDirection:row;
    flexWrap:wrap;
    paddingLeft:20px;
    paddingRight:20px;


  `



const Button = styled.TouchableOpacity`
overflow: hidden;

`




export default Home