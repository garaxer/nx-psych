import { Story, Meta } from '@storybook/react';
import CreateService, {CreateServiceProps} from './createService';

export default {
  component: CreateService,
  title: 'CreateService',
} as Meta;

const Template: Story<CreateServiceProps> = (args) => <CreateService {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
