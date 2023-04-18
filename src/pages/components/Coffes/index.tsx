import { Outlet } from 'react-router-dom'
import { Coffe, CoffesOptionGrid, CoffesSection } from './styles'
import { ShoppingCart } from 'phosphor-react'
import { defaultTheme } from '../../../styles/themes/default'
import coffesJSON from '../../../../src/coffes.json'
import { Icon } from '../../Home/styles'

// interface CoffeProps {
//   id: number
//   name: string
//   description: string
//   tags: string[]
//   price: number
//   img: string
// }

export function Coffes() {
  return (
    <div>
      <Outlet />
      <CoffesSection>
        <h1>Nossos cafés</h1>
        <div>
          <CoffesOptionGrid>
            {coffesJSON.map((coffe) => {
              return (
                <Coffe key={coffe.id}>
                  <img src={coffe.img} alt="" />
                  <div>
                    {coffe.tags.map((tag) => {
                      return (
                        <p key={coffe.id} className="tag">
                          {tag.toUpperCase()}
                        </p>
                      )
                    })}
                  </div>
                  <p className="name">{coffe.name}</p>
                  <div className="description">
                    <p>{coffe.description}</p>
                  </div>
                  <div className="price">
                    <p>R$ {coffe.price}</p>
                    <button>
                      <Icon bgValue={defaultTheme.purple}>
                        <ShoppingCart
                          size={24}
                          weight="fill"
                          color={defaultTheme.white}
                        />
                      </Icon>
                    </button>
                  </div>
                </Coffe>
              )
            })}
          </CoffesOptionGrid>
        </div>
      </CoffesSection>
    </div>
  )
}
