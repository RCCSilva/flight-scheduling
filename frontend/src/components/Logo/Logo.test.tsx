import { render, screen } from '@testing-library/react'

import Logo from './Logo'

describe('<Logo />', () => {
  it('should render the heading', () => {
    const { container } = render(<Logo />)

    expect(screen.getByRole('heading', { name: /Logo/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
