import PropTypes from 'prop-types';
import {List, Item, Text, Btn } from './PhoneList.style';

import { useSelector, useDispatch } from "react-redux";
import { getContacts, getFilter } from "redux/selectors";
import { delContact } from "redux/contactsSlice";

export const PhoneList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContacts = () => {
      return contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
      );
  };

  const filtered = filteredContacts();

    const elements = filtered.map(contact => (
        <Item key={contact.id}>
                <Text>{contact.name}</Text>
                <Text>{contact.number}</Text>
                <Btn type='button' onClick={() => {
                                dispatch(delContact(contact.id));
                            }}>Delete</Btn>
            </Item>
      ));
      return <List>{elements}</List>;
    };
        
    

PhoneList.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
  };

  PhoneList.defaultProps = {
    contacts: [],
  };