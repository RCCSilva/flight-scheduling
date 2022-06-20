import { render, screen } from '@testing-library/react'

import AppContainer from './AppContainer'

describe('<AppContainer />', () => {
  it('should render the heading', () => {
    const { container } = render(<AppContainer>Test</AppContainer>)

    expect(
      screen.getByRole('heading', { name: /AppContainer/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
