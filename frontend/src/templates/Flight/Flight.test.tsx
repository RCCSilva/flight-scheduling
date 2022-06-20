import { render, screen } from '@testing-library/react'

import Flight from './Flight'

describe('<Flight />', () => {
  it('should render the heading', () => {
    const { container } = render(<Flight />)

    expect(screen.getByRole('heading', { name: /Flight/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
