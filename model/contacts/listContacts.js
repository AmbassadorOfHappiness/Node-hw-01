import fs from 'fs/promises';
import contactsPath  from './contactsPath';

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  return contacts;
}

export default listContacts;