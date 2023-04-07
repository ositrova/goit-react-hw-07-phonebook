
import {List, Item, Text, Btn } from './PhoneList.style';

import { useDispatch } from "react-redux";
import { deleteContacts } from "redux/operations";

export const PhoneList = ({filterContacts}) => {
  const dispatch = useDispatch();

  const deleteContact = contactId => {
    dispatch(deleteContacts(contactId));
};
  
    const elements = filterContacts.map(contact =>(
        <Item key={contact.id}>
            <Text>{contact.name}</Text>
                <Text>{contact.number}</Text>
                <Btn type='button' onClick={() => deleteContact(contact.id)}>Delete</Btn>
            </Item>
      ));
      return <List>{elements}</List>;
    };
        