import { Story, Meta } from '@storybook/react';
import { Form, Formik } from 'formik';
import CreateService, { CreateServiceProps } from './createService';
import MyTextInput, { MyTextInputProps } from './MyTextInput';
import * as Yup from 'yup';

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
