import { darken } from 'polished'
import styled, { css } from 'styled-components'

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    width: 30rem;
    height: 100vh;
    background: ${theme.colors.blueBg};
    padding-left: ${theme.spacings.large};
    padding-top: ${theme.spacings.xlarge};

    h2 {
      font-size: ${theme.font.sizes.xxlarge};
      color: ${theme.colors.white};
    }
  `}
`

export const Options = styled.ul`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    padding-top: ${theme.spacings.medium};
  `}
`

export const Option = styled.li`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    cursor: pointer;
    svg {
      width: 4rem;
    }

    &:hover {
      color: ${darken(0.1, theme.colors.white)};
    }
  `}
`
