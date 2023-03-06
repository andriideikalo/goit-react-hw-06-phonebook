import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tasksSelector, filterSelector } from 'redux/selectors';
import { deleteContact } from '../../redux/contactsSplice';
import {
  ContactItemStyled,
  ButtonItemStyled,
  ContactNameItemStyled,
} from '../ContactList/ContactItem/ContactItemStyled';

const ContactList = () => {
  const dispatch = useDispatch();
  const tasksList = useSelector(tasksSelector);
  const filterQuery = useSelector(filterSelector);
  const visibleList = tasksList.filter(item =>
    item.name.toLowerCase().includes(filterQuery)
  );

  return (
    <ol>
      {visibleList.length !== 0 ? (
        visibleList.map(({ id, name, number }) => (
          <ContactItemStyled key={id}>
            <ContactNameItemStyled>{name} </ContactNameItemStyled>
            <ContactNameItemStyled> {number}</ContactNameItemStyled>
            <ButtonItemStyled
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </ButtonItemStyled>
          </ContactItemStyled>
        ))
      ) : (
        <h2>The list of contacts is empty</h2>
      )}
    </ol>
  );
};

// ContactList.propTypes = {
//   contactsList: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   onDelete: PropTypes.func.isRequired,
// };

export default ContactList;
