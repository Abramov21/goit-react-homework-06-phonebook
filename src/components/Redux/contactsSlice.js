import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [
      { id: 'id-1', name: 'Tony Stark', number: '459-12-56' },
      { id: 'id-2', name: 'Stephen Rogers', number: '443-89-12' },
      { id: 'id-3', name: 'Bruce Banner', number: '645-17-79' },
      { id: 'id-4', name: 'Thor Odinson', number: '227-84-62' },
      { id: 'id-5', name: 'Natasha Romanoff', number: '207-91-27' },
      { id: 'id-6', name: 'Clint Barton', number: '564-92-48' },
    ],
    filter: '',
  },
  reducers: {
    add(state, { payload }) {
      return {
        ...state,
        contacts: [...state.contacts, payload],
      };
    },
    remove(state, { payload }) {
      return {
        ...state,
        contacts: state.contacts.filter(el => el.id !== payload),
      };
    },
    change(state, { payload }) {
      return {
        ...state,
        filter: payload,
      };
    },
  },
});

export const { add, remove, change } = contactsSlice.actions;
