import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
`

export const Input = styled.input<{ showingOptions: boolean }>`
  ${({ theme, showingOptions }) => css`
    margin-top: ${theme.spacings.xxsmall};

    padding: ${theme.spacings.xxsmall};
    width: 100%;
    font-size: ${theme.font.sizes.large};
    border: 1px solid ${theme.colors.gray};
    border-radius: ${theme.border.radius};

    ${showingOptions &&
    css`
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    `}

    &:focus {
      outline: ${theme.colors.primary} solid 1px;
    }
  `}
`

export const Options = styled.div`
  ${({ theme }) => css`
    position: absolute;
    width: 100%;
    background: ${theme.colors.white};

    border-left: 1px solid ${theme.colors.gray};
    border-right: 1px solid ${theme.colors.gray};
    border-bottom: 1px solid ${theme.colors.gray};

    border-bottom-left-radius: ${theme.border.radius};
    border-bottom-right-radius: ${theme.border.radius};

    z-index: ${theme.layers.base};
  `}
`

export const Option = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    padding: ${theme.spacings.xxsmall};
    width: 100%;
    background: ${theme.colors.white};

    &:hover {
      background: ${theme.colors.lightGray};
    }
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
  `}
`
