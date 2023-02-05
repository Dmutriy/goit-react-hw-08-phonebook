import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { CircularProgress, Modal } from '@mui/material';
import {
  getError,
  getIsLoading,
  getContacts,
} from '../redux/contacts/selectors';

import Section from '../components/Section';
import Filter from '../components/Filter';
import ContactsList from '../components/ContactList';
import ContactForm from '../components/ContactForm';
import { Wrap } from '../components/App.styled';

import { getFilter } from '../redux/filters/selectors';
import { fetchContacts } from 'redux/contacts/operations';

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Wrap>
      <ContactForm />
      <Section>
        <Filter />
        {isLoading && !error && <b>Loading...</b>}
        {contacts.length > 0 && <ContactsList contacts={filter} />}
      </Section>
    </Wrap>
  );
}
