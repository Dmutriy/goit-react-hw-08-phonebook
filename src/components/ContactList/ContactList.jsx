import { List, Item } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import PropTypes from 'prop-types';
import { getContacts } from 'redux/contacts/selectors';
import { getFilter } from 'redux/filters/selectors';
import { Button, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const contactsFiltered = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  const dispatch = useDispatch();

  return (
    <List>
      {contactsFiltered.map(({ id, name, number }) => (
        <Item key={id}>
          <Typography component="p" variant="h6">
            {name}: {number}
          </Typography>

          <Button
            variant="contained"
            startIcon={<DeleteIcon />}
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};

List.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
};
export default ContactList;
