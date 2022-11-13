import React from 'react';
import ContactItem from 'components/ContactItem/ContactItem';
import PropTypes from 'prop-types';
import { Contact, Markup } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => (
  <Markup>
    {contacts.map(({ id, name, number }) => (
      <Contact key={id}>
        <ContactItem
          id={id}
          name={name}
          number={number}
          onDeleteContact={onDeleteContact}
        />
      </Contact>
    ))}
  </Markup>
);
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
