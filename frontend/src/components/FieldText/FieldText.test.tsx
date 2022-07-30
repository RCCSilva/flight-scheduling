import { render, screen } from '@testing-library/react'

import FieldText from './FieldText'

describe('<FieldText />', () => {
  it('should render the heading', () => {
    const { container } = render(<FieldText />)

    expect(
      screen.getByRole('heading', { name: /FieldText/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
