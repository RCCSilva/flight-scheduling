import { render, screen } from '@testing-library/react'

import FormCreateFlight from './FormCreateFlight'

describe('<FormCreateFlight />', () => {
  it('should render the heading', () => {
    const { container } = render(<FormCreateFlight />)

    expect(
      screen.getByRole('heading', { name: /FormCreateFlight/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
