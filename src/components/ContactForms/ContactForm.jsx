// import { useState } from 'react';
// import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';
import { FormStyled } from './ContactFormStyled';
import { InputStyled } from './ContactFormStyled';
import { LabelStyled } from './ContactFormStyled';
import { BottonStyled } from './ContactFormStyled';

import { addContact } from '../../redux/contactsSplice';
import { useDispatch, useSelector } from 'react-redux';
import { contactSelector } from '../../redux/selectors';

const initialValues = {
  name: '',
  number: '',
};
// console.log(initialValues);
const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactSelector);

  return (
    <FormStyled
      name="contact"
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        const { name, number } = values;
        const isNameInContacts = contacts.find(
          item => item.name.toLowerCase() === name.toLowerCase()
        );
        if (
          isNameInContacts.filter(contact => contact.name === name).length > 0
        ) {
          alert(`${name} is already in contacts`);
          return;
        }
        dispatch(addContact({ name, number }));
        actions.resetForm();
      }}
    >
      <LabelStyled htmlFor="name">
        Name
        <InputStyled
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        ></InputStyled>
      </LabelStyled>
      <LabelStyled htmlFor="number">
        Number
        <InputStyled
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        ></InputStyled>
      </LabelStyled>
      <BottonStyled type="submit">Add contact</BottonStyled>
    </FormStyled>
  );
};
console.log(initialValues);

export default ContactForm;
