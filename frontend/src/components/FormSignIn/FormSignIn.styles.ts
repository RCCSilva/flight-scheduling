import styled, { css } from 'styled-components'

import * as ButtonStyles from 'components/Button/Button.styles'

export const Wrapper = styled.form`
  ${({ theme }) => css`
    ${ButtonStyles.Wrapper} {
      margin-top: ${theme.spacings.small};
      margin-left: auto;
      margin-right: auto;
    }
  `}
`
