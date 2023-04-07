
import { GlobalStyle } from "../GlobalStyle";
import { Layout } from "../Layout/Layout";

import { Filter } from "../Filter/Filter";
import {PhoneForm} from "../PhoneForm/PhoneForm";
import { PhoneList } from "../PhoneList/PhoneList";
import {Phonebook, Contacts} from './App.style'

import { useSelector } from 'react-redux';
import { useDispatch, } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';


export const App = () => {
  const contactsFromStore = useSelector(state => state.contacts.contacts.items);
  const filterFromStore = useSelector(state => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getFilterContacts = () => {
    return contactsFromStore.filter(el =>
      el.name.toLowerCase().includes(filterFromStore.toLowerCase())
    );
  };

  return (
    <Layout>
<Phonebook>Phonebook</Phonebook>
<PhoneForm 
contacts={contactsFromStore}
filterContacts={getFilterContacts()}/>

<Contacts>Contacts</Contacts>
<Filter  />

<PhoneList/>

      <GlobalStyle/>
    </Layout>
  );
  };

