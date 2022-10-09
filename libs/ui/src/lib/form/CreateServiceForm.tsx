import { Form, Formik } from 'formik';
import MyTextInput from './MyTextInput';
import * as Yup from 'yup';
import AddTime from './AddTime';
import { Button } from '@mui/material';
import { CreateServiceDto } from 'libs/shared-types/src/lib/api/generated';

export type CreateServiceProps = {
  onSubmit: (service: CreateServiceDto) => Promise<void>;
};

type FormValues = {
  title: string;
  timeSlots: { startTime: Date }[];
};

export const CreateServiceForm = ({ onSubmit }: CreateServiceProps) => {
  return (
    <Formik
      initialValues={{
        title: '',
        timeSlots: [],
      }}
      validationSchema={Yup.object({
        title: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        timeSlots: Yup.array(),
      })}
      onSubmit={(values, { setSubmitting }) => {
        onSubmit(values as FormValues);
        setSubmitting(false);
      }}
    >
      <Form>
        <MyTextInput label="Title" placeholder={'My Diner'} name="title" />
        <AddTime
          label="Add time slot"
          placeholder={'Enter Date'}
          name={'timeSlots'}
          menuItems={[]}
        />
        <Button type="submit">Submit</Button>
      </Form>
    </Formik>
  );
};

export default CreateServiceForm;
