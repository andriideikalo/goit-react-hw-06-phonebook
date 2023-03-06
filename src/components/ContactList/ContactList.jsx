import { PropTypes } from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import ContactItem from './ContactItem/ContactItem';

const ContactList = ({ contacts }) => {
  return (
    <ol>
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ol>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

export default connect(mapStateToProps)(ContactList);
