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
import { useState } from 'react';

export interface AddDateProps {
  placeholder: string;
  name: string;
  label?: string;
  type?: string;
  menuItems: { label: string; value: string }[];
}

export type ListItems = {
  //startTime: Date,
  id: string;
};

const Paper = styled('div')(({ theme }) => {
  console.log(theme);

  return { backgroundColor: theme.palette.background.paper }; //
});

export default function AddDate(props: AddDateProps) {
  const [field, meta, helpers] = useField(props.name);
  const [items, setItems] = useState<ListItems[]>([]);
  const addDate = () => {
    setItems([...items, { id: items.length.toString() }]);
    helpers.setTouched(true);
    helpers.setValue(items);
  };

  return (
    <Paper>
      <label htmlFor={field.name}>{props.label}</label>
      <Button onClick={addDate}>Add Date</Button>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
      <List>
        {items.map((x) => (
          <ListItem
            key={x.id}
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText primary={x.id} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
