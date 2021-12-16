const fs = require('fs/promises');

const listContacts = require('./listContacts');
const contactsPath = require('../contactsPath');
const removeContact = async (contactId) => {
  try {
    const contacts = await listContacts();
    const contactIndex = contacts.findIndex(
      (contact) => String(contact.id) === String(contactId)
    );
    if (contactIndex === -1) {
      return null;
    }
    contacts.splice(contactIndex, 1);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  } catch (error) {
    console.log(error);
  }
};

module.exports = removeContact;