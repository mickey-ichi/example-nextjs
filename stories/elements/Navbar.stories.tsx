import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { Navbar } from '../../components/elements/Navbar'

export default {
    title: 'elements/NavBar',
    component: Navbar,
} as Meta

const Template: Story = (args) => <Navbar {...args} ></Navbar>

export const Primary = Template.bind({})
