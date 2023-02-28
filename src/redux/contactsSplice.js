import { createSlice } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const contactsInitialState = {
//   items: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     { id: 'ouEIi6Im8nv1MacD5YzME', name: 'Andrii', number: '55555555' },
//     { id: '2FM-yFPphh-fVJvuAG2Ex', name: 'dv', number: '22345' },
//     { id: 'Lc_7-hmOuPzNGoAP5A7pZ', name: 'Андрiй', number: '4567889' },
//     { id: 'A_T6WaPAzGi4Ss0llbOkM', name: 'wlada', number: '5987654445' },
//   ],
// };

export const contactsSlice = createSlice({
  name: 'contacts',

  initialState: {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      { id: 'A_T6WaPAzGi4Ss0llbOkM', name: 'wlada', number: '22222' },
      { id: 'UV1ZZiMtGEeYpXEHLyBtf', name: 'ddd', number: '22222' },
      { id: 'QbSpSqbpIEYtYshsmPLfq', name: 'Andrey', number: '55555555' },
      { id: 'rr49TFa3RYm37ei3OZ__6', name: 'dv', number: '55555555' },
      { id: 'TzEJEJnx4xaCix6LSKDQ7', name: 'dddddd', number: '22222' },
    ],
    filter: '',
  },
  reducers: {
    addContact(state, action) {},
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(({ id }) => id !== action.payload);
    },
    setFilter(state, action) {
      return {
        ...state,
        filter: action.payload,
      };
    },
  },
});

export const { addContact, deleteContact, setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
