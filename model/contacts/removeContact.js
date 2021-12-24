import fs from 'fs/promises';
import contacts from '../../db/contacts.json';
import contactsPath  from './contactsPath';

const removeContact = async (contactId) => {
  const index = contacts.findIndex((contact) => contact.id === contactId);
  if (index !== -1) {
    const [result] = contacts.splice(index, 1);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2),
    )
    return result;
  }
  return null;
};

export default removeContact;