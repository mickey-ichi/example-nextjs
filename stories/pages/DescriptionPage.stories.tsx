import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { DescriptionPage } from '../../components/pages/home/DescriptionPage'

export default {
    title: 'pages/DescriptionPage',
    component: DescriptionPage,
} as Meta

const Template: Story = (args) => <DescriptionPage onNext={function (): void {
    throw new Error('Function not implemented.')
}} {...args}></DescriptionPage>

export const Primary = Template.bind({})
