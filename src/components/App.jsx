import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForms/ContactForm';
import { nanoid } from 'nanoid';
// import Notiflix from 'notiflix';
import ContactList from './ContactList/ContactList';
import Filter from './Filter';

const localStorageContacts = () =>
  JSON.parse(localStorage.getItem('contacts')) ?? [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    { id: 'A_T6WaPAzGi4Ss0llbOkM', name: 'wlada', number: '22222' },
    { id: 'UV1ZZiMtGEeYpXEHLyBtf', name: 'ddd', number: '22222' },
    { id: 'QbSpSqbpIEYtYshsmPLfq', name: 'Andrey', number: '55555555' },
    { id: 'rr49TFa3RYm37ei3OZ__6', name: 'dv', number: '55555555' },
    { id: 'TzEJEJnx4xaCix6LSKDQ7', name: 'dddddd', number: '22222' },
  ];

export default function App() {
  const [contacts, setContacts] = useState(localStorageContacts);
  const [filter, setFilter] = useState('');

  const addContact = contact => {
    const id = nanoid();
    const { name } = contact;

    if (contacts.filter(contact => contact.name === name).length > 0) {
      alert(`${name} is already in contacts`);
      return;
    }
    setContacts(prevState => [
      ...prevState,
      { id, name, number: contact.number },
    ]);
  };

  const onFilterChange = e => {
    setFilter(e.target.value);
  };

  const getFilteredContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteItem = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  useEffect(() => {
    // console.log('didmount');
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <>
        <div className="form">
          <h1>Phonebook</h1>
          <ContactForm onSubmit={addContact} />
          <h2>Contacts</h2>
          <Filter onChange={onFilterChange} />
          <ContactList onDelete={deleteItem} items={getFilteredContacts()} />
        </div>
      </>
    </div>
  );
}
