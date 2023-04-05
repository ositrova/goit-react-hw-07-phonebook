import {FormAdd, Input, Btn} from './PhoneForm.style'

import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';

export const PhoneForm = () => {
  const dispatch = useDispatch();
  const checkContacts = useSelector(getContacts);

  const onSubmit = event => {
      event.preventDefault();
      const form = event.target;
      const formName = event.target.elements.name.value;
      const formNumber = event.target.elements.number.value;
      if (
          checkContacts.find(
              cont => cont.name.toLowerCase() === formName.toLowerCase()
          )
      ) {
          return alert(`${formName} is already in contacts`);
      }
      dispatch(addContact(formName, formNumber));
      form.reset();
  };
    
        return (
           
<FormAdd onSubmit={onSubmit}>
    <label htmlFor="Name"> Name : </label>
        
    <Input
   type="text"
   name="name"
   placeholder="Ivanov Ivan"
   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
   required
/>

    <label htmlFor="Number"> Number : </label>
        
    <Input
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
  

