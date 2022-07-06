import { Story, Meta } from '@storybook/react';
import Menus, { MenusProps } from './menus';
import {
  GitPullRequest,
  AlertCircle,
  Messages,
  Database,
} from 'tabler-icons-react';

const data = [
  { icon: <GitPullRequest size={16} />, color: 'blue', label: 'Pull Requests' },
  { icon: <AlertCircle size={16} />, color: 'teal', label: 'Open Issues' },
  { icon: <Messages size={16} />, color: 'violet', label: 'Discussions' },
  { icon: <Database size={16} />, color: 'grape', label: 'Databases' },
];

export default {
  component: Menus,
  title: 'Menus',
} as Meta;

const Template: Story<MenusProps> = (args) => (
  <Menus {...args}>
    {data.map((link) => (
      <Menus.MenuItem {...link} />
    ))}
  </Menus>
);

export const Primary = Template.bind({});
Primary.args = { size: 'medium' };

export const Secondary = Template.bind({});
Secondary.args = { size: 'small' };
