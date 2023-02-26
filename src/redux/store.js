import { configureStore } from '@reduxjs/toolkit';
import { createAction, createReducer } from '@reduxjs/toolkit';

const addContact = createAction('contact/add');
const remooveContact = createAction('contact/remove');
// console.log(increment(100));

export const myReduser = createReducer([], {
  [addContact]: (state, action) => state.push(action.payload),
  [remooveContact]: (state, action) =>
    state.filter(item => item.id !== action.payload),
});

export const store = configureStore({
  reducer: {
    contacts: addContact,
    filter: '',
  },
});
