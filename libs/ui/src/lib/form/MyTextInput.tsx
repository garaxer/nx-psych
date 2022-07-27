import { useField } from 'formik';
import TextField from '@mui/material/TextField';

export interface MyTextInputProps {
  placeholder: string;
  name: string;
  label?: string;
  type?: string;
}

export default function MyTextInput(props: MyTextInputProps) {
  const [field, meta] = useField(props.name);
  return (
    <TextField
      data-testid={`textfield-${props.name}`}
      {...field}
      {...props}
      error={!!(meta.touched && meta.error)}
      helperText={meta.error}
    />
  );
}
