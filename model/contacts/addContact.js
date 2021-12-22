import fs from 'fs/promises';
import {randomUUID} from 'crypto';
import contacts from '../../db/contacts.json';
import contactsPath  from './contactsPath';

const addContact = async ({name, email, phone}) => {
  const newContact = { id: randomUUID(), name, email, phone };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2),
  )
  return newContact
};
export default addContact;