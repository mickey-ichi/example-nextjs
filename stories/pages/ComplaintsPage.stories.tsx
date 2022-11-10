import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { ComplaintsPage } from '../../components/pages/step_five/ComplaintsPage'

export default {
    title: 'pages/ComplaintsPage',
    component: ComplaintsPage,
} as Meta

const Template: Story = (args) => <ComplaintsPage onBack={function (): void {
    throw new Error('Function not implemented.')
}} onNext={function (): void {
    throw new Error('Function not implemented.')
}} {...args}></ComplaintsPage>

export const Primary = Template.bind({})
