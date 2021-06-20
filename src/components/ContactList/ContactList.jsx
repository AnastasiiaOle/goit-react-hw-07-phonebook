import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.scss';


const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <div className={styles.ul}>
            <ul className={styles.list}>
                {contacts.map(contact => (
                    <li className={styles.item} key={contact.id}>
                        {contact.name}:{contact.number}
                        <button className={styles.button}
                            type='button'
                            onClick={() => onDeleteContact(contact.id)}>
                            Delete
                  </button>
                    </li>
                ))}
            </ul>
        </div>
    );

};

ContactList.propTypes = {
    value: PropTypes.string,
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string,
            number: PropTypes.number,
        }),
    ),
    onDeleteContact: PropTypes.func,
}

export default ContactList;
