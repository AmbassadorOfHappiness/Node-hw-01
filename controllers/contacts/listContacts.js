const fs = require('fs/promises');
const contactsPath = require('../contactsPath');

const listContacts = async () => {
  const contact = await fs.readFile(contactsPath, 'utf8');
  const result = JSON.parse(contact);
  return result;
};

module.exports = listContacts;