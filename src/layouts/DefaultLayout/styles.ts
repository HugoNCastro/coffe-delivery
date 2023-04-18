/* eslint-disable dot-notation */
import styled from 'styled-components'

export const LayoutContainer = styled.div`
  height: calc(100vh - 10rem);
  padding: 2.5rem;
  background-color: ${(props) => props.theme['background']};
`
