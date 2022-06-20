import { Story, Meta } from '@storybook/react'
import Heading, { HeadingProps } from './Heading'

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Heading',
  },
} as Meta<HeadingProps>

export const Default: Story<HeadingProps> = (args) => <Heading {...args} />
