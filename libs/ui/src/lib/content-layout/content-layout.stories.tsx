import { Story, Meta } from '@storybook/react';
import AppLayout from './content-layout';

export default {
  component: AppLayout,
  title: 'AppLayout',
} as Meta;

const Template: Story = (args) => (
  <AppLayout {...args} style={{ backgroundColor: 'blue' }}>
    <AppLayout.Hero style={{ backgroundColor: 'red' }}>Hero</AppLayout.Hero>
    <AppLayout.LeftContent style={{ backgroundColor: 'orange' }}>
      LeftContent
    </AppLayout.LeftContent>
    <AppLayout.RightTop style={{ backgroundColor: 'pink' }}>
      RightTop
    </AppLayout.RightTop>
    <AppLayout.RightMiddle style={{ backgroundColor: 'yellow' }}>
      RightMiddle
    </AppLayout.RightMiddle>
    <AppLayout.RightBottom style={{ backgroundColor: 'navy' }}>
      RightBottom
    </AppLayout.RightBottom>
    <AppLayout.Footer style={{ backgroundColor: 'gold' }}>
      Footer
    </AppLayout.Footer>
  </AppLayout>
);

export const Primary = Template.bind({});
Primary.args = {};
