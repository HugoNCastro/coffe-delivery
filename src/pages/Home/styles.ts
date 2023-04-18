import styled from 'styled-components'

interface IconProps {
  bgValue: string
}

export const HomeContainer = styled.div`
  display: flex;
  height: 50%;
  width: 100%;
  margin-top: 5rem;
  align-items: center;
  justify-content: center;
`
export const ContainerInfo = styled.div`
  width: 50%;

  h1 {
    font: 700 4rem 'Baloo 2';
    line-height: 3.9rem;
  }

  h2 {
    font: 400 1.5rem 'Roboto';
    line-height: 3.9rem;
  }

  div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  section {
    display: grid;
    grid-template-columns: 2fr 2fr;
    margin-top: 1rem;
  }
`

export const ContainerImage = styled.div`
  display: flex;
  margin-top: 10rem;
  height: 32rem;
`

export const Icon = styled.div<IconProps>`
  display: flex;
  width: 1.8rem;
  padding: 0.3rem;
  border-radius: 16px;
  background-color: ${(props) => props.bgValue};
  margin-top: 0.4rem;
`
