import { HeaderContainer } from './styles'
import logoCoffe from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffe} alt="" />
      <MapPin />
      <ShoppingCart />
    </HeaderContainer>
  )
}
