const fs = require('fs/promises');
// const path = require('path');
const crypto = require('crypto');

const listContacts = require('./listContacts');
const contactsPath = require('../contactsPath');

const addContact = async (name, email, phone) => {
  const contacts = await listContacts();
  const newContact = { id: crypto.randomUUID(), name, email, phone };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2),);
  return newContact;
}
module.exports = addContact;