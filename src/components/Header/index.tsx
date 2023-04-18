import {
  HeaderContainer,
  LocationContainer,
  ShoppingCartContainer,
} from './styles'
import logoCoffe from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffe} alt="" />
      <div>
        <LocationContainer>
          <MapPin size={24} weight="fill" />
          Porto alegre, RS
        </LocationContainer>
        <ShoppingCartContainer>
          <ShoppingCart size={24} weight="fill" />
        </ShoppingCartContainer>
      </div>
    </HeaderContainer>
  )
}
