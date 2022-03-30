import AsyncStorage from '@react-native-async-storage/async-storage'
import { showMessage } from 'react-native-flash-message'
import readCart from './readCart'

const addToCart = async item => {
  const formerCart = await readCart()

  const arrayOfFCart = formerCart || []

  try {
    const jsonValue = JSON.stringify([
      ...arrayOfFCart,
      { title: item.title, image: item.image , price: item.price,id: item.id }
    ])
    await AsyncStorage.setItem('panier', jsonValue)
    showMessage({
      message: `${item.title} à bien été ajouté au panier`,
      type: 'success'
    })
  } catch (e) {
    showMessage({
      message: `une erreur est survenue`,
      descriptions: e.message,
      type: 'danger'
    })
  }
}

export default addToCart