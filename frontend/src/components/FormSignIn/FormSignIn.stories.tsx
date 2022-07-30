import { Story, Meta } from '@storybook/react'
import FormSignIn from './FormSignIn'

export default {
  title: 'FormSignIn',
  component: FormSignIn,
} as Meta

export const Default: Story = () => (
  <div style={{ width: '30rem' }}>
    <FormSignIn />
  </div>
)
