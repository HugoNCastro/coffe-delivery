import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 15rem;
  width: 75%;

  div {
    display: flex;
  }
`
export const LocationContainer = styled.div`
  gap: 1rem;
  align-items: center;
  color: ${(props) => props.theme.purple};
`
export const ShoppingCartContainer = styled.div`
  margin-left: 1rem;
  padding: 0.5rem;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme['yellow-dark']};
  background-color: ${(props) => props.theme['yellow-light']};
`
