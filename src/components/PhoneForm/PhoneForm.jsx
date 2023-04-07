import {FormAdd, Input, Btn} from './PhoneForm.style'
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/operations';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

export const PhoneForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const contacts = useSelector(state => state.contacts.contacts.items);
    const dispatch = useDispatch();

    const handleChange = e => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                return;
        }
    };

    const formSubmitHandle = e => {
        e.preventDefault();
        const contact = {
            name,
            phone: number,
        };
        if (contacts.find(({ phone }) => phone === number)) {
            toast(
                'This phone number is already in the contact list, please write another phone number',
                { type: 'warning', autoClose: 1000 }
            );
            return;
        }

        dispatch(addContacts(contact));
        resetForm();
        toast('Contact is added to list', { type: 'success', autoClose: 1000 });
    };

    const resetForm = () => {
        setName('');
        setNumber('');
    };
        return (
           
<FormAdd onSubmit={formSubmitHandle}>
<ToastContainer />
    <label htmlFor="Name"> Name : </label>
        
    <Input
    onChange={handleChange}
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
    onChange={handleChange}
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
  

