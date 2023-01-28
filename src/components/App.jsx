import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';

import { getContacts, getError, getIsLoading } from 'redux/contacts/selectors';

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Section from './Section';
import Filter from './Filter';
import { Wrap } from './App.styled';

export function App() {
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Wrap>
      <Section title={`Phonebook`}></Section>
      <ContactForm />
      {isLoading && !error && <b>Request in progress...</b>}
      {contacts.length !== 0 ? (
        <Section title={`Contacts`}>
          <Filter />
          <ContactList />
        </Section>
      ) : (
        <Section title={`Add new contacts`}></Section>
      )}
    </Wrap>
  );
}

export default App;
