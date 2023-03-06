import { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { FormStyled } from './ContactFormStyled';
import { InputStyled } from './ContactFormStyled';
import { LabelStyled } from './ContactFormStyled';
import { BottonStyled } from './ContactFormStyled';

function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameId = nanoid();
  const numberId = nanoid();

  const handleChange = e => {
    const { name, value } = e.target;
    name === 'name' ? setName(value) : setNumber(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, number });
    e.target.reset();
    setName('');
    setNumber('');
  };

  return (
    <>
      <FormStyled name="contact" onSubmit={handleSubmit}>
        <LabelStyled htmlFor={nameId}>Name</LabelStyled>
        <InputStyled
          value={name}
          onChange={handleChange}
          id={nameId}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <LabelStyled htmlFor={numberId}>Number</LabelStyled>
        <InputStyled
          value={number}
          onChange={handleChange}
          id={numberId}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <BottonStyled type="submit">Add contact</BottonStyled>
      </FormStyled>
    </>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
