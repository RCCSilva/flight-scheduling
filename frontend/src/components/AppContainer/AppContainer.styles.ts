import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
`

export const Content = styled.section`
  ${({ theme }) => css`
    flex: 1;
    padding: ${theme.spacings.xlarge} ${theme.spacings.medium};
  `}
`
