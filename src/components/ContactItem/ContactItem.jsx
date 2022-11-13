import PropTypes from 'prop-types';

const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <>
      <p>
        {name}: {number}
      </p>
      <button
        onClick={() => {
          onDeleteContact(id);
        }}
      >
        Delete
      </button>
    </>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
