import { PropTypes } from 'prop-types';
import React from 'react';
import { ContactItemStyled } from './ContactItemStyled';
import { ContactNameItemStyled } from './ContactItemStyled';
import { ButtonItemStyled } from './ContactItemStyled';

import { useDispatch } from 'react-redux';
import { deleteContact } from '../../../redux/contactsSplice';

const ContactItem = ({ contact }) => {
  const { id, name, number } = contact;
  const dispatch = useDispatch();

  return (
    <ContactItemStyled>
      <ContactNameItemStyled>
        {name}: {number}
      </ContactNameItemStyled>
      <ButtonItemStyled onClick={() => dispatch(deleteContact(id))}>
        Delete
      </ButtonItemStyled>
    </ContactItemStyled>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),

  onDelete: PropTypes.func,
};

export default ContactItem;
