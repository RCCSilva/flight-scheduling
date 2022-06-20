import { Parameters } from '@storybook/react'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../src/styles/global'
import theme from '../src/styles/theme'

export const parameters: Parameters = {
  nextRouter: {
    Provider: RouterContext.Provider
  },
  backgrounds: {
    default: 'won-light',
    values: [
      {
        name: 'won-light',
        value: theme.colors.white,
      },
      {
        name: 'won-dark',
        value: theme.colors.mainBg,
      }
    ]
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles removeBg />
      <Story />
    </ ThemeProvider>
  )
]
