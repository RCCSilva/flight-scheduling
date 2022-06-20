import { darken } from 'polished'
import styled, { css } from 'styled-components'

export const Wrapper = styled.table`
  width: 100%;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
`

export const TableHeaderRow = styled.tr`
  ${({ theme }) => css`
    display: flex;
    border: none;
    background: ${theme.colors.black};
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.large};
    height: 5rem;
  `}
`

export const TableHeaderValue = styled.td`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TableBodyRow = styled.tr<{ isLink?: boolean }>`
  ${({ theme, isLink }) => css`
    display: flex;
    height: 5rem;
    ${isLink &&
    css`
      cursor: pointer;
    `}
  `}
`

export const TableBodyValue = styled.td`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TableBody = styled.tbody`
  ${({ theme }) => css`
    background: ${theme.colors.white};

    &:hover {
      background: ${darken(0.01, theme.colors.white)};
    }

    & ${TableBodyRow}:nth-child(2) {
      background: ${theme.colors.lightGray};
      &:hover {
        background: ${darken(0.01, theme.colors.lightGray)};
      }
    }
  `}
`
