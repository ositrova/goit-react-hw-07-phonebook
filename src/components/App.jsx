
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout/Layout";

import { Filter } from "./Filter/Filter";
import {PhoneForm} from "./PhoneForm/PhoneForm";
import { PhoneList } from "./PhoneList/PhoneList";
import {Phonebook, Contacts} from './App.style'

import { getContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';


export const App = () => {
  const contacts = useSelector(getContacts);
  return (
    <Layout>
<Phonebook>Phonebook</Phonebook>
<PhoneForm />

<Contacts>Contacts</Contacts>
<Filter  />
{contacts.length > 0 ? 'Contacts' : 'No contacts'}
<PhoneList/>

      <GlobalStyle/>
    </Layout>
  );
  };

