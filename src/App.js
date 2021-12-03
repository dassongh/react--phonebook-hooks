import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList';
import s from './App.module.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contacts = JSON.parse(window.localStorage.getItem('contacts'));
    setContacts(contacts);
  }, []);

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    if (contacts.some(contact => contact.name === name)) return alert(`${name} is already in contacts`);

    setContacts(s => {
      return [...s, { name, number, id: nanoid() }];
    });
  };

  const removeContact = e => {
    const removingName = e.currentTarget.parentNode.childNodes[0].data;
    const removingC = contacts.find(contact => contact.name === removingName);
    contacts.splice(contacts.indexOf(removingC), 1);

    setContacts([...contacts]);
  };

  const filterHandler = e => {
    setFilter(e.currentTarget.value);
  };

  const filterVisibleContacts = () => {
    const normalizeFilter = filter.toLowerCase().trim();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter));
  };

  const filteredContacts = filterVisibleContacts().reverse();

  return (
    <div className={s.container}>
      <h2>Phonebook</h2>

      <ContactForm onSubmit={addContact} />

      <h2>Contacts</h2>

      <ContactList contacts={filteredContacts} onRemove={removeContact} onFilter={filterHandler} />
    </div>
  );
}

export default App;
