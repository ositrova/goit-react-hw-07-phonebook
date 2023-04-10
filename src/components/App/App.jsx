
import { GlobalStyle } from "../GlobalStyle";
import { Layout } from "../Layout/Layout";

import { Filter } from "../Filter/Filter";
import {PhoneForm} from "../PhoneForm/PhoneForm";
import { PhoneList } from "../PhoneList/PhoneList";
import {Phonebook, Contacts} from './App.style'
import { Loader } from "components/Loader/Loader";

import { useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { selectIsLoading } from 'redux/selectors';
import { selectError } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  

  return (
    <Layout>
<Phonebook>Phonebook</Phonebook>
<PhoneForm />

<Contacts>Contacts</Contacts>
<Filter  />
{isLoading && !error && <Loader/>}
<PhoneList/>

      <GlobalStyle/>
    </Layout>
  );
  };

