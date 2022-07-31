import { Story, Meta } from '@storybook/react';
import { Form, Formik } from 'formik';
import CreateService, { CreateServiceProps } from './createService';
import MyTextInput, { MyTextInputProps } from './MyTextInput';
import * as Yup from 'yup';
import MySelectInput from './MySelectInput';
import AddDate from './AddDate';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button } from '@mui/material';
/** Theme */

const theme = createTheme({
  palette: {
    background: {
      paper: '#e5e5e5',
    },
    primary: {
      main: '#d0652b',
    },
    secondary: {
      main: '#e65400',
    },
  },
});

export default {
  component: CreateService,
  title: 'Form',
} as Meta;

const Template: Story<CreateServiceProps> = (args) => (
  <CreateService {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

const MyTextInputTemplate: Story<MyTextInputProps> = (args) => (
  <Formik
    initialValues={{
      [args.name]: '',
    }}
    validationSchema={Yup.object({
      [args.name]: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
    })}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }}
  >
    <Form>
      <MyTextInput {...args} />
      <MySelectInput menuItems={[{ label: 'foo', value: 'foo' }]} {...args} />
      <MyTextInput {...args} type={'number'} />
      <AddDate placeholder={'Enter Date'} name={'timeSlots'} menuItems={[]} />
      <Button type="submit">Submit</Button>
    </Form>
  </Formik>
);

export const MyTextInputBuiler = MyTextInputTemplate.bind({});
MyTextInputBuiler.args = {
  placeholder: 'placeholder',
  name: 'name',
  label: 'label',
  type: 'type',
};
