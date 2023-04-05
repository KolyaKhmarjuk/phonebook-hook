import { useEffect, useState } from 'react';

const ContactsBook = ({ filter, deleteContactId, contacts }) => {
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    const normalized = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalized)
    );
    setFilteredList(filteredContacts);
  }, [contacts, filter]);

  return (
    <ul>
      {filteredList.map(contact => (
        <li className="contactItem" key={contact.id}>
          {contact.name}: {contact.number}
          <button
            className="deleteBtn"
            onClick={() => {
              deleteContactId(contact.id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsBook;
