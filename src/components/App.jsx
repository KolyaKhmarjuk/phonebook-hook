import { useEffect, useState } from 'react';
import AddForm from './AddForm/AddForm';
import FilterContact from './FilterContact/FilterContact';
import ContactsBook from './ContactsBook/ContactsBook';

export default function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    setContacts(prevState => [...prevState, newContact]);
  };

  const handelFilter = e => {
    setFilter(e.target.value);
  };

  const deleteContactId = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  return (
    <>
      <AddForm contacts={contacts} addContact={addContact} />

      <FilterContact filter={filter} handelFilter={handelFilter} />

      <ContactsBook
        contacts={contacts}
        filter={filter}
        deleteContactId={deleteContactId}
      />
    </>
  );
}
