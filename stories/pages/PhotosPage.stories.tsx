import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { PhotosPage } from '../../components/pages/step_three/PhotosPage'

export default {
    title: 'pages/PhotosPage',
    component: PhotosPage,
} as Meta

const Template: Story = (args) => <PhotosPage onBack={function (): void {
    throw new Error('Function not implemented.')
}} onNext={function (): void {
    throw new Error('Function not implemented.')
}} {...args}></PhotosPage>

export const Primary = Template.bind({})
