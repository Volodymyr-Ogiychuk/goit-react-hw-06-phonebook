import s from './ContactList.module.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from '../redux/contactsSlice';

const ContactList = () => {
    const dispatch = useDispatch();
    const { contacts } = useSelector(state => state.contacts)
    const filterValue = useSelector(state => state.filter);
    const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );
    
return (
    <ul className={s.list}>
        {visibleContacts.map(({ id, name, number}) => (
            <li key={id} className={s.listItem} >
                <p>{name}: {number}</p>
                <button className={s.btnDelete} type="button" onClick={() => dispatch(deleteContacts(id))}>Delete</button>
            </li>                
        ))}

    </ul>
)};

export default ContactList;