import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ImageDetails = ({ urlImage }) => {
  return (
    <Image
      source={{
        uri: urlImage
      }}
    />
  )
}

const Image = styled.Image`
    width:340px;
    height:340px;
    justify-content: center;
    margin:10px 20px;
`
ImageDetails.propTypes = {}


export default ImageDetails
