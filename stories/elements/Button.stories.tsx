import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { Button } from '../../components/elements/Button'

export default {
    title: 'elements/Button',
    component: Button,
    argTypes: {
        theme: {
            control: false,
        },
    },
} as Meta

const Template: Story = (args) => <Button {...args} >Hello!</Button>

export const Primary = Template.bind({

})
