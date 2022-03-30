import styled from 'styled-components'

const PrimaryButton = styled.TouchableOpacity`
  margin: 16px 0px;
 
  padding: 8px 16px;
  width:200px;
  justify-content: center;
  align-items: center;
  background-color: black;
  border-radius: 3px;
`

const SecondaryButton = styled.TouchableOpacity`
  margin: 16px 10px;
  padding: 8px 16px;
  width:180px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 3px;
  
  border: 0.5px;
  border-color: black;
`
const ThirdButton = styled.TouchableOpacity`
  margin: 16px 10px;
  padding: 8px 16px;
  width:230px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 3px;
  
  border: 0.5px;
  border-color: black;
`
export { PrimaryButton,ThirdButton, SecondaryButton }