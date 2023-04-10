// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import s from './PhoneBookList.module.css';
import { remove } from 'components/Redux/contactsSlice';

const PhoneBookList = () => {
  const contacts = useSelector(state => state?.contacts);
  const item = useSelector(state => state?.contacts);
  const filter = useSelector(state => state?.filter);
  const filteredContacts = contacts.filter(item =>
    item.name.toLowerCase().includes(filter.toLocaleLowerCase())
  );
  console.log(filteredContacts);
  console.log(contacts);
  console.log(item);
  const dispatch = useDispatch();
  // console.log(contacts);
  // console.log(filter);
  return (
    <ul className={s.contactList}>
      {filteredContacts.map(({ id, name, number }) => (
        <li className={s.item} key={id}>
          <p>{name}:</p>
          <p className={s.number}>{number}</p>
          <button className={s.itemBtn} onClick={() => dispatch(remove(id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default PhoneBookList;
