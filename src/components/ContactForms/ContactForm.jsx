// import { useState } from 'react';
// import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';
import { FormStyled } from './ContactFormStyled';
import { InputStyled } from './ContactFormStyled';
import { LabelStyled } from './ContactFormStyled';
import { BottonStyled } from './ContactFormStyled';

import { addContact } from '../../redux/contactsSplice';
import { useDispatch, useSelector } from 'react-redux';
import { tasksSelector } from '../../redux/selectors';

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(tasksSelector);

  return (
    <FormStyled
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        const { name, number } = values;
        const isNameInContacts = tasks.find(
          item => item.name.toLowerCase() === name.toLowerCase()
        );
        if (isNameInContacts) {
          alert('Sorry >±< this contact already in list ⬇️');
          actions.resetForm();
          return;
        }
        dispatch(addContact({ name, number }));
        actions.resetForm();
      }}
    >
      <LabelStyled htmlFor="name">
        Full Name
        <InputStyled
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        ></InputStyled>
      </LabelStyled>
      <br />
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

export default ContactForm;
