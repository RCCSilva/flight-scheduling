import { Story, Meta } from '@storybook/react'
import Sidebar from './Sidebar'

export default {
  title: 'Sidebar',
  component: Sidebar,
} as Meta

export const Default: Story = () => <Sidebar />
