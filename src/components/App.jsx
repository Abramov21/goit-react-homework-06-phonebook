import React from 'react';
import { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid';
import PhoneBookList from './PhoneBookList';
import { Form } from './Form/Form';
import Filter from './Filter';

const array = [
  { id: 'id-1', name: 'Tony Stark', number: '459-12-56' },
  { id: 'id-2', name: 'Stephen Rogers', number: '443-89-12' },
  { id: 'id-3', name: 'Bruce Banner', number: '645-17-79' },
  { id: 'id-4', name: 'Thor Odinson', number: '227-84-62' },
  { id: 'id-5', name: 'Natasha Romanoff', number: '207-91-27' },
  { id: 'id-6', name: 'Clint Barton', number: '564-92-48' },
];

export const App = () => {
  const [phoneList, setPhoneList] = useState(() => {
    return JSON.parse(localStorage.getItem('phoneList')) ?? array;
  });
  const [filter, setFilter] = useState('');

  const handleFormSubmit = contact => {
    console.log(contact);

    // const addItemBook = {
    //   id: nanoid(),
    //   // form.name: name,
    //   // form.number:number,
    // };

    if (
      phoneList.find(
        item =>
          item.name.toLocaleLowerCase() === contact.name.toLocaleLowerCase()
      )
    ) {
      return alert(`${contact.name}  is olrady in contacts`);
    }

    setPhoneList(prevState => [...prevState, contact]);

    // this.setState(prevState => ({
    //   phoneList: [...prevState.phoneList, addItemBook],
    // }));
  };

  const deleteItemBook = phoneId => {
    setPhoneList(prev => prev.filter(item => item.id !== phoneId));

    // this.setState(prevState => ({
    //   phoneList: prevState.phoneList.filter(
    //     phoneListItem => phoneListItem.id !== phoneId
    //   ),
    // }));
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
    // console.log(filter);/
  };

  // const filteredContacts = useMemo(() => {
  //   const normalizedContacts = filter.toLocaleLowerCase();
  //   return phoneList.filter(({ name }) =>
  //     name.toLocaleLowerCase().includes(normalizedContacts)
  //   );
  // }, [phoneList, filter]);

  const getFilteredContacts = () => {
    // const normalizedContacts = filter.toLocaleLowerCase();
    return phoneList.filter(({ name }) =>
      name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  };
  const filteredContacts = getFilteredContacts();

  useEffect(() => {
    localStorage.setItem('phoneList', JSON.stringify(phoneList));
  }, [phoneList]);

  return (
    <>
      <Form onSubmit={handleFormSubmit} />

      <Filter value={filter} onChange={changeFilter} />
      <PhoneBookList
        phoneList={filteredContacts}
        onDeletePhoneListItem={deleteItemBook}
      />
    </>
  );
};

// export class Apps extends Component {
//   state = {
//     phoneList: [
//       { id: 'id-1', name: 'Tony Stark', number: '459-12-56' },
//       { id: 'id-2', name: 'Stephen Rogers', number: '443-89-12' },
//       { id: 'id-3', name: 'Bruce Banner', number: '645-17-79' },
//       { id: 'id-4', name: 'Thor Odinson', number: '227-84-62' },
//       { id: 'id-5', name: 'Natasha Romanoff', number: '207-91-27' },
//       { id: 'id-6', name: 'Clint Barton', number: '564-92-48' },
//     ],
//     filter: '',
//   };

//   handleFormSubmit = ({ name, number }) => {
//     const { phoneList } = this.state;

//     console.log(name, number);

//     const addItemBook = {
//       id: nanoid(),
//       name: name,
//       number: number,
//     };

//     if (phoneList.find(item => item.name === addItemBook.name)) {
//       return alert(`${addItemBook.name}  is olrady in contacts`);
//     }
//     this.setState(prevState => ({
//       phoneList: [...prevState.phoneList, addItemBook],
//     }));
//   };

//   deleteItemBook = phoneId => {
//     this.setState(prevState => ({
//       phoneList: prevState.phoneList.filter(
//         phoneListItem => phoneListItem.id !== phoneId
//       ),
//     }));
//   };

//   changeFilter = event => {
//     this.setState({ filter: event.currentTarget.value });

//     const { phoneList, filter } = this.state;

//     return phoneList.filter(item =>
//       item.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   };

//   getVisibleFilter = () => {
//     const { phoneList, filter } = this.state;

//     return phoneList.filter(item =>
//       item.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   };

//   componentDidMount() {
//     const localPhonelist = localStorage.getItem('phoneList');
//     const parsePhonelist = JSON.parse(localPhonelist);
//     if (parsePhonelist) {
//       this.setState({ phoneList: parsePhonelist });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     // console.log(prevState);
//     if (this.state.phoneList !== prevState.phoneList) {
//       localStorage.setItem('phoneList', JSON.stringify(this.state.phoneList));
//     }
//   }

//   render() {
//     const { filter } = this.state;

//     const filteredPhonebookList = this.getVisibleFilter();

//     return (
//       <>
//         <Form onSubmit={this.handleFormSubmit} />

//         <Filter value={filter} onChange={this.changeFilter} />
//         <PhoneBookList
//           phoneList={filteredPhonebookList}
//           onDeletePhoneListItem={this.deleteItemBook}
//         />
//       </>
//     );
//   }
// }
