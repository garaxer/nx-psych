import { Story, Meta } from '@storybook/react';
import { Form, Formik } from 'formik';
import CreateServiceForm, { CreateServiceProps } from './CreateServiceForm';
import MyTextInput, { MyTextInputProps } from './MyTextInput';
import * as Yup from 'yup';
import MySelectInput from './MySelectInput';
import AddTime from './AddTime';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button } from '@mui/material';
/** Theme */

const theme = createTheme({
  palette: {
    background: {
      paper: '#e5e5e5',
    },
    primary: {
      main: '#132e47',
    },
    secondary: {
      main: '#3bd779',
    },
  },
});

export default {
  component: CreateServiceForm,
  title: 'Form',
} as Meta;

const Template: Story<CreateServiceProps> = (args) => (
  <CreateServiceForm {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  onSubmit: (values) => Promise.resolve(alert(JSON.stringify(values, null, 2))),
};

const MyTextInputTemplate: Story<MyTextInputProps> = (args) => (
  <ThemeProvider theme={theme}>
    <Formik
      initialValues={{
        [args.name]: '',
      }}
      validationSchema={Yup.object({
        [args.name]: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        timeSlots: Yup.array(),
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
        <AddTime
          label="Add time slot"
          placeholder={'Enter Date'}
          name={'timeSlots'}
          menuItems={[]}
        />
        <Button type="submit">Submit</Button>
      </Form>
    </Formik>
  </ThemeProvider>
);

export const TestAllInputTypes = MyTextInputTemplate.bind({});
TestAllInputTypes.args = {
  placeholder: 'placeholder',
  name: 'name',
  label: 'label',
  type: 'type',
};
