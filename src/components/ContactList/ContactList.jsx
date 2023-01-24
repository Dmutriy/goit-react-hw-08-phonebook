import PropTypes from 'prop-types';
import { List, Item } from './ContactList.styled';
import Button from '@mui/material/Button';
//Redux-toolkit
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { getContacts } from 'redux/contacts/selectors';
import { getFilter } from 'redux/filters/selectors';

const ContactList = () => {
  const contacts = useSelector(getContacts);

  const filter = useSelector(getFilter);

  const contactsFiltered = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const dispatch = useDispatch();

  if (contactsFiltered) {
    return (
      <List>
        {contactsFiltered.map(({ id, name, phone }) => {
          console.log('id', id);
          console.log('name', name);
          console.log('number', phone);
          return (
            <Item key={id}>
              {name}: {phone}
              <Button type="button" onClick={() => dispatch(deleteContact(id))}>
                Delete
              </Button>
            </Item>
          );
        })}
      </List>
    );
  }
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
