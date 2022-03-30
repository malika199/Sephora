import React from 'react'
import styled from 'styled-components'

const Images = ({ urlImage }) => {
  return (
    <Image
      source={{
        uri: urlImage
      }}
    />
  )
}

const Image = styled.Image`
    width:165px;
    height:200px;
    borderRaduis:2px ;
    overflow: hidden;

    resizeMode:cover
`

export default Images
