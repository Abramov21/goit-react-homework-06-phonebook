import React from 'react';
import PhoneBookList from './PhoneBookList';
import { Form } from './Form/Form';
import Filter from './Filter';

export const App = () => {
  return (
    <>
      <Form />
      <Filter />
      <PhoneBookList
      // phoneList={filteredContacts}
      // onDeletePhoneListItem={dispatch(remove(id))}
      />
    </>
  );
};
