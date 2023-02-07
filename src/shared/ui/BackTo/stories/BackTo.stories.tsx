import { BackTo } from '@shared/ui/BackTo'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
	title: 'BackTo',
	component: BackTo
} as ComponentMeta<typeof BackTo>

const Template: ComponentStory<typeof BackTo> = args => <BackTo {...args} />

export const Default = Template.bind({})
Default.args = {
	to: '/',
	text: 'Back to home'
}