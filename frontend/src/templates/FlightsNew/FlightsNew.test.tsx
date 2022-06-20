import { render, screen } from '@testing-library/react'

import FlightsNew from './FlightsNew'

describe('<FlightsNew />', () => {
  it('should render the heading', () => {
    const { container } = render(<FlightsNew />)

    expect(
      screen.getByRole('heading', { name: /FlightsNew/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
