import { useField } from 'formik';
import Select from '@mui/material/Select';
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
} from '@mui/material';

export interface MySelectInputProps {
  placeholder: string;
  name: string;
  label?: string;
  type?: string;
  menuItems: { label: string; value: string }[];
}

export default function MySelectInput({
  menuItems,
  ...props
}: MySelectInputProps) {
  const [field, meta] = useField(props.name);
  return (
    <FormControl sx={{ ml: 1, mr: 1, minWidth: 120 }}>
      <InputLabel>{props?.label}</InputLabel>

      <Select
        id="outlined-select-currency"
        data-testid={`textfield-${props.name}`}
        sx={{ width: '25ch' }}
        {...field}
        {...props}
        label="Age"
        error={!!(meta.touched && meta.error)}
      >
        {menuItems.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText error={!!(meta.touched && meta.error)}>
        {meta.error}
      </FormHelperText>
    </FormControl>
  );
}
