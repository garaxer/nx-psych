import { useField } from 'formik';
import {
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  styled,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import enLocale from 'date-fns/locale/en-AU';
import { Typography } from 'tabler-icons-react';
export interface AddDateProps {
  placeholder: string;
  name: string;
  label?: string;
  type?: string;
  menuItems: { label: string; value: string }[];
}

export type ListItems = {
  id: string;
  startTime: Date;
};

const Paper = styled('div')(({ theme }) => {
  console.log(theme);

  return {
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  }; //
});

export default function AddDate(props: AddDateProps) {
  const [field, meta, helper] = useField(props.name);
  const [items, setItems] = useState<ListItems[]>([]);
  const [value, setValue] = useState<Date>(new Date());
  const addDate = () => {
    const newItems = [
      ...items,
      { id: items.length.toString(), startTime: value },
    ];
    setItems(newItems);
    setValue(new Date()); // add one hour
    helper.setTouched(true);
    helper.setValue(newItems);
  };

  const handleRemove = (id: string) => {
    const newItems = items.filter((i) => i.id !== id);
    setItems(newItems);
    helper.setValue(newItems);
  };

  return (
    <>
      <Paper>
        <LocalizationProvider
          dateAdapter={AdapterDateFns}
          adapterLocale={enLocale}
        >
          <TimePicker
            value={value}
            onChange={(newValue) => {
              helper.setTouched(true);
              setValue(newValue || new Date());
            }}
            renderInput={(params) => (
              <TextField
                data-testid={`timeSlotfield-${props.name}`}
                {...params}
                error={!!(meta.touched && meta.error)}
                helperText={meta.error}
                {...field}
              />
            )}
          />
        </LocalizationProvider>
        <Button onClick={addDate}>Add Date</Button>

        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </Paper>

      <List>
        {items.map((x) => (
          <ListItem
            key={x.id}
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => handleRemove(x.id)}
              >
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText
              primary={x.id}
              secondary={x.startTime.toLocaleTimeString()}
            />
          </ListItem>
        ))}
      </List>
    </>
  );
}
