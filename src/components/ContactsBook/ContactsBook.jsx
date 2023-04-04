const ContactsBook = ({ filteredContact, deleteContactId }) => {
  return (
    <>
      <ul>
        {filteredContact.map(contact => (
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
    </>
  );
};

export default ContactsBook;
