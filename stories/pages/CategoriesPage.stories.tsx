import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { CategoriesPage } from '../../components/pages/step_two/CategoriesPage'

export default {
    title: 'pages/CategoriesPage',
    component: CategoriesPage,
} as Meta

const Template: Story = (args) => <CategoriesPage onBack={function (): void {
    throw new Error('Function not implemented.')
}} onNext={function (): void {
    throw new Error('Function not implemented.')
}} {...args}></CategoriesPage>

export const Primary = Template.bind({})
