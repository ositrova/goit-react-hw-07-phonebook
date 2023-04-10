import {FormAdd, Input, Btn} from './PhoneForm.style'
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import { useState } from 'react';

export const PhoneForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const dispatch = useDispatch();
    const items = useSelector(selectContacts);
  
    const handleChangeName = e => {
      const { value } = e.target;
      setName(value);
    };
  
    const handleChangeNumber = e => {
      const { value } = e.target;
      setNumber(value);
    };
  
    const handleFormSubmit = e => {
      e.preventDefault();
      const form = e.currentTarget;
        const contactsLists = [...items];
      if (contactsLists.findIndex(contact => name === contact.name) !== -1) {
        alert(`${name} is already in contacts.`);
      } else {
        dispatch(addContact({ name: name, number: number }));
        
      }
      setName('');
      setNumber('');
      
    };
        return (
           
<FormAdd onSubmit={handleFormSubmit}>

    <label htmlFor="Name"> Name : </label>
        
    <Input
    onChange={handleChangeName}
    value={name}
   type="text"
   name="name"
   placeholder="Ivanov Ivan"
   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
   required
/>

    <label htmlFor="Number"> Number : </label>
        
    <Input
    onChange={handleChangeNumber}
    value={number}
  type="tel"
  name="number"
  placeholder="067 777 77 77"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
  
/>

  
    <Btn type="submit">Add contact</Btn>
</FormAdd>

        )
    }
  

