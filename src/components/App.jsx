// import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForms/ContactForm';
// import { nanoid } from 'nanoid';
// import Notiflix from 'notiflix';
import ContactList from './ContactList/ContactList';
import Filter from './Filter';

// const localStorageContacts = () =>
//   JSON.parse(localStorage.getItem('contacts')) ?? [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     { id: 'A_T6WaPAzGi4Ss0llbOkM', name: 'wlada', number: '22222' },
//     { id: 'UV1ZZiMtGEeYpXEHLyBtf', name: 'ddd', number: '22222' },
//     { id: 'QbSpSqbpIEYtYshsmPLfq', name: 'Andrey', number: '55555555' },
//     { id: 'rr49TFa3RYm37ei3OZ__6', name: 'dv', number: '55555555' },
//     { id: 'TzEJEJnx4xaCix6LSKDQ7', name: 'dddddd', number: '22222' },
//   ];

export const App = () => {
  return (
    <div>
      <>
        <div className="form">
          <h1>Phonebook</h1>
          <ContactForm />
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      </>
    </div>
  );
};
