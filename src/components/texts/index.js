import styled from 'styled-components'

const TextPrice = styled.Text`
marginTop:15px;
color:black;
fontSize: 17px;
fontWeight: bold;
`
const TextHome = styled.Text`
  flex:1;
  
  fontSize:14px;
  color:black;
  alignItems:center;
`
const DescText = styled.Text`
  padding: 6px 18px;
  font-size: 12px;
  font-weight: 300;
  color: #696969;
  // text-align: center;
  letter-spacing: 1px;
`

const PrimaryButtonText = styled.Text`
  font-size: 14px;
  color: #fff;
`

const SecondaryButtonText = styled.Text`
  font-size: 14px;
  color: black;
`

const TextTitle = styled.Text`
  font-size: 18px;
  padding: 10px 0; 
  font-weight: 700;
  color: black;
  text-align: center;
`
const TitleText = styled.Text`
fontSize: 20px;
color:black;
margin:16px;
text-align:center;
`
const TextArticle = styled.Text`
  fontSize: 14px;
  color:black;
`


export { TitleText, TextHome, TextArticle,TextPrice,DescText, SecondaryButtonText ,TextTitle, PrimaryButtonText }
