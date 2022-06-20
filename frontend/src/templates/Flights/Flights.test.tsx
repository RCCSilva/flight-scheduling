import { render, screen } from '@testing-library/react'

import Flights from './Flights'

describe('<Flights />', () => {
  it('should render the heading', () => {
    const { container } = render(<Flights />)

    expect(screen.getByRole('heading', { name: /Flights/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
