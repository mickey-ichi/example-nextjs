import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { Progressbar } from '../../components/elements/Progressbar'

export default {
    title: 'elements/Progressbar',
    component: Progressbar,
} as Meta

const Template: Story = (args) => <Progressbar {...args} ></Progressbar>

export const Primary = Template.bind({})
