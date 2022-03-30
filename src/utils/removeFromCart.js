import AsyncStorage from '@react-native-async-storage/async-storage'
import { showMessage } from 'react-native-flash-message'
import readCart from './readCart'

const removeFromCart = async item => {
  const formerCart = await readCart()
  const filteredCart = formerCart.filter(art => art.id !== item.id)
  try {
    const jsonValue = JSON.stringify(filteredCart)
    await AsyncStorage.setItem('panier', jsonValue)
    showMessage({
      message: `${item.title} à bien été supprimé du panier`,
      type: 'info'
    })
  } catch (e) {
    showMessage({
      message: `une erreur est survenue`,
      descriptions: e.message,
      type: 'danger'
    })
  }
}

export default removeFromCart