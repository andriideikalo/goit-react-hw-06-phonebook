import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsState = {
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
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.contacts.findIndex(
        task => task.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const { addContact, deleteContact } = contactsSlice.actions;
// export const tasksReducer = taskSlice.reducer;
export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
