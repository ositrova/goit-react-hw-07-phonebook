
import {List, Item, Text, Btn } from './PhoneList.style';

import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectVisibleContacts } from '../../redux/selectors';



export const PhoneList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();


  const handleDelete = id => dispatch(deleteContact(id));

    const elements = contacts.map(contact=>(
        <Item key={contact.id}>
            <Text>{contact.name}</Text>
                <Text>{contact.number}</Text>
                <Btn type='button' onClick={() => handleDelete(contact.id)}>Delete</Btn>
            </Item>
      ));
      return <List>{elements}</List>;
    };
        