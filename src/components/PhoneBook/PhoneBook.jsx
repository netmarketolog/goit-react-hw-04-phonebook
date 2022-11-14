import { useState } from 'react';
import useLocalStorage from 'components/hook/LocalStorage';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

import { Container } from './PhoneBook.styled';

export default function PhoneBook() {
  const baseContacts = [
    { id: 'id-1', name: 'Elon Musk', number: '459-12-56' },
    { id: 'id-2', name: 'Artem Barabash', number: '443-89-12' },
    { id: 'id-3', name: 'Oleksandr Repeta', number: '645-17-79' },
    { id: 'id-4', name: 'Vitaliy Lyakh', number: '093-974-92-77' },
  ];
  const [contacts, setContacts] = useLocalStorage(baseContacts);
  const [filter, setFilter] = useState('');

  const formSubmitHander = date => {
    contacts.find(contact => contact.name === date.name)
      ? alert(`${date.name} is already in contacts`)
      : setContacts(contacts => [date, ...contacts]);
  };
  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const deleteContact = contactId => {
    setContacts(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHander} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={visibleContacts} onDeleteContact={deleteContact} />
    </Container>
  );
}
