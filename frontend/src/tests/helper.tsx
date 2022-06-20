import { ThemeProvider } from 'styled-components'
import { render } from '@testing-library/react'
import React from 'react'
import theme from 'styles/theme'

export const renderWithTheme = (children: React.ReactNode) => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>)
}
