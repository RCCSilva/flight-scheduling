import { Story, Meta } from '@storybook/react'
import Table, { TableProps } from './Table'

export default {
  title: 'Table',
  component: Table,
} as Meta<TableProps>

export const Default: Story<TableProps> = (args) => <Table {...args} />
