import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
const ImagesProducts = ({ urlImage }) => {
  return (
    <Image
      source={{
        uri: urlImage
      }}
    />
  )
}

const Image = styled.Image`

    width:100px;
    height: 150px;
    resizeMode: contain;
`
ImagesProducts.propTypes = {}

export default ImagesProducts
