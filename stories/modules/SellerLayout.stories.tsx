import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { SellerLayout } from '../../components/modules/SellerLayout'

export default {
    title: 'modules/SellerLayout',
    component: SellerLayout,
} as Meta

const Template: Story = (args) => <SellerLayout {...args} ></SellerLayout>

export const Primary = Template.bind({})
