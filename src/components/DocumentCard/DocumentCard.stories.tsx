import { ComponentMeta, ComponentStory } from '@storybook/react'
import { DocumentCard } from './index'

export default {
  title: 'Example/DocumentCard',
  component: DocumentCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof DocumentCard>

const Template: ComponentStory<typeof DocumentCard> = (args) => (
  <DocumentCard {...args} />
)

export const Default = Template.bind({})
Default.args = {
  imgSrc: 'https://picsum.photos/400/200',
  title: '글로벌 개발팀',
  category: 'Business',
  memberName: 'present',
  audienceTotalCount: 1350,
  viewTotalCount: 4545,
}

export const EllipsisTitle = Template.bind({})
EllipsisTitle.args = {
  imgSrc: 'https://picsum.photos/400/200',
  title: '글로벌 개발팀이 협업하는 How Global Dev Team Collaborates',
  category: 'Business',
  memberName: 'present',
  audienceTotalCount: 1350,
  viewTotalCount: 4545,
}

export const NotCount = Template.bind({})
NotCount.args = {
  imgSrc: 'https://picsum.photos/400/200',
  title: '글로벌 개발팀이 협업하는 How Global Dev Team Collaborates',
  category: 'Business',
  memberName: 'present',
}
