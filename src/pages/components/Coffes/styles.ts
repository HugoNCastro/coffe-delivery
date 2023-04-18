import styled from 'styled-components'

export const CoffesSection = styled.section`
  height: full;
  background-color: ${(props) => props.theme.background};
  margin: 2rem 0 0 auto;
  h1 {
    font: 700 2rem 'Baloo 2';
    line-height: 3.9rem;
    margin-left: 7.5rem;
  }
`

export const CoffesOptionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;
`

export const Coffe = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  .name {
    font: 700 1.5rem 'Baloo 2';
  }

  .tag {
    font: 700 1rem 'Baloo 2';
    padding: 0.5rem;
    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    border-radius: 8px;
  }

  .description {
    width: 80%;
    align-items: center;
    justify-content: center;
    font: 400 1.3rem 'Roboto';
  }

  .price {
    width: 20rem;
    font: 700 1.9rem 'Baloo 2';
    align-items: center;
    justify-content: space-around;
  }

  img {
    height: 10rem;
  }

  div {
    align-items: center;
    justify-items: center;
    display: flex;
    gap: 1rem;
  }

  button {
    cursor: pointer;
    background: transparent;
    border: none;
  }
`
