import styled, { css } from 'styled-components'

import * as DropdownFieldStyles from 'components/DropdownField/DropdownField.styles'
import * as ButtonStyles from 'components/Button/Button.styles'

export const Wrapper = styled.div``

export const Form = styled.form`
  ${({ theme }) => css`
    ${DropdownFieldStyles.Wrapper} {
      margin-top: ${theme.spacings.xxsmall};
      width: 30rem;
    }

    ${ButtonStyles.Wrapper} {
      margin-top: ${theme.spacings.xsmall};
    }
  `}
`
