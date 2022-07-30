import { Story, Meta } from '@storybook/react'
import FormSignUp, { FormSignUpProps } from './FormSignUp'

export default {
  title: 'FormSignUp',
  component: FormSignUp,
} as Meta<FormSignUpProps>

export const Default: Story<FormSignUpProps> = (args) => <FormSignUp {...args} />
