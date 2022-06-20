import { render, screen } from '@testing-library/react'

import Heading from './Heading'

describe('<Heading />', () => {
  it('should render the heading', () => {
    const { container } = render(<Heading>Heading</Heading>)

    expect(
      screen.getByRole('heading', { name: /Heading/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
