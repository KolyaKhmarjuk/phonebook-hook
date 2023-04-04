import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import AddForm from './AddForm/AddForm';
import FilterContact from './FilterContact/FilterContact';
import ContactsBook from './ContactsBook/ContactsBook';

const defaultContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export default function App() {
  const [contacts, setContacts] = useState([...defaultContacts]);
  const [filter, setFilter] = useState('');
  const [filteredContact, setFilteredContact] = useState([]);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handelChange = e => {
    const { name } = e.target;

    switch (name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      case 'filter':
        setFilter(e.target.value);
        break;
      default:
        return;
    }
  };

  const handelSubmit = e => {
    e.preventDefault();

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    const nameCheck = contacts.some(contact => contact.number.includes(number));

    if (nameCheck) {
      alert(`${number} is readly in contacts!`);
      return;
    }

    addContact(newContact);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const addContact = newContact => {
    setContacts(prevState => ({
      ...prevState,
      newContact,
    }));
  };

  const deleteContactId = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  useEffect(() => {
    const normalized = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.includes(normalized)
    );
    setFilteredContact(filteredContacts);
  }, [contacts, filter]);

  // const filterContacts = () => {
  //   const normalized = filter.toLowerCase();
  //   return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(normalized))
  // }

  return (
    <>
      <AddForm
        handelChange={handelChange}
        handelSubmit={handelSubmit}
        name={name}
        number={number}
      />

      <FilterContact handelChange={handelChange} filter={filter} />

      <ContactsBook
        filteredContact={filteredContact}
        deleteContactId={deleteContactId}
      />
    </>
  );
}
