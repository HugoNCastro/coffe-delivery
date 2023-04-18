import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { ContainerImage, ContainerInfo, HomeContainer, Icon } from './styles'
import Coffe from '../../assets/Imagem.svg'
import { defaultTheme } from '../../styles/themes/default'
import { Coffes } from '../components/Coffes'

export function Home() {
  return (
    <div>
      <HomeContainer>
        <ContainerInfo>
          <h1>
            Encontre o café perfeito <br /> para qualquer hora do dia
          </h1>
          <h2>
            Com o Coffe Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>

          <section>
            <div>
              <Icon bgValue={defaultTheme['yellow-dark']}>
                <ShoppingCart
                  size={24}
                  weight="fill"
                  color={defaultTheme.white}
                />
              </Icon>
              <p>Compra simples e segura</p>
            </div>

            <div>
              <Icon bgValue={defaultTheme.yellow}>
                <Timer size={24} weight="fill" color={defaultTheme.white} />
              </Icon>
              <p>Entrega grátis e rastreada</p>
            </div>

            <div>
              <Icon bgValue={defaultTheme['base-text']}>
                <Package size={24} weight="fill" color={defaultTheme.white} />
              </Icon>
              <p>Embalagem mantém o café intacto</p>
            </div>

            <div>
              <Icon bgValue={defaultTheme.purple}>
                <Coffee size={24} weight="fill" color={defaultTheme.white} />
              </Icon>
              <p>O café chega fresquinho até você</p>
            </div>
          </section>
        </ContainerInfo>
        <ContainerImage>
          <img src={Coffe} alt="" sizes="10rem" />
        </ContainerImage>
      </HomeContainer>
      <Coffes />
    </div>
  )
}
