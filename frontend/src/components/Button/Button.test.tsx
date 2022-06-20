import { render, screen } from '@testing-library/react'

import Button from './Button'

describe('<Button />', () => {
  it('should render the heading', () => {
    const { container } = render(<Button>Button!</Button>)

    expect(screen.getByRole('heading', { name: /Button/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
