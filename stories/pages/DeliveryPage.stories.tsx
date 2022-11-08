import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { DeliveryPage } from '../../components/pages/step_four/DeliveryPage'

export default {
    title: 'pages/DeliveryPage',
    component: DeliveryPage,
} as Meta

const Template: Story = (args) => <DeliveryPage onBack={function (): void {
    throw new Error('Function not implemented.')
}} onNext={function (): void {
    throw new Error('Function not implemented.')
}} {...args}></DeliveryPage>

export const Primary = Template.bind({})
