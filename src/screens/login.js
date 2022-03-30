import React, { useEffect, useState } from 'react'

import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components'

import { showMessage, hideMessage } from "react-native-flash-message";
import { PrimaryButton, SecondaryButton } from '../components/button/buttonPrimary';
import { PrimaryButtonText, SecondaryButtonText, TextTitle } from '../components/texts';

const Login = ({ navigation }) => {

  const [error, setError] = useState(false);
  const [useremail, setUseremail] = useState({});
  const [userpswrd, setUserpswrd] = useState({});


  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('https://fakestoreapi.com/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        username: useremail,
        password: userpswrd
      })
    })
      .then(res => res.json())
      .then(json => console.log(json))

    navigation.navigate('Home')
    showMessage({
      message: "Vous êtes connectés",
      type: "info",
    });


  }

  return (
    <>


      <SafeAreaView>
        <ViewComponent>
          <TextTitle> Connectez à votre compte </TextTitle>
          <TextInputL

            onChange={(e) => {
              setUseremail({ ...useremail, email: e.target.value })
            }}
          />
          <TextInputL
            secureTextEntry={true}
            onChange={(e) => {
              setUserpswrd({ ...userpswrd, password: e.target.value })
            }}
          />

          <ViewLog>
            <PrimaryButton
              onPress={handleSubmit}

            ><PrimaryButtonText> Se connecter     <Icon name="user" color="white"
              size={18} margin="40px" /></PrimaryButtonText></PrimaryButton>


          </ViewLog>

        </ViewComponent>
      </SafeAreaView>


    </>

  )

}
const ViewLog = styled.View`
  flexDirection:row;
  align-items:center;
`

const ViewComponent = styled.View`
 marginTop:30px;
  align-items:center;
`

const TextInputL = styled.TextInput`
  height: 40px;
  border: 1px;
  border-raduis: 3px;
  width: 250px;
  margin: 10px;
  borderColor : black;
`

Login.propTypes = {}

export default Login