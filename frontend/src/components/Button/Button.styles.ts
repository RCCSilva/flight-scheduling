import { darken } from 'polished'
import styled, { css } from 'styled-components'

export const Wrapper = styled.button`
  ${({ theme }) => css`
    border: none;
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    background: ${theme.colors.primary};
    border-radius: ${theme.border.radius};
    cursor: pointer;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    &:hover {
      background: ${darken(0.05, theme.colors.primary)};
    }
  `}
`
