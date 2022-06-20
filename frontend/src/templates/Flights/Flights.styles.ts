import styled, { css } from 'styled-components'

export const Wrapper = styled.main``

export const HeaderWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: ${theme.spacings.medium};
  `}
`
