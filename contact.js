const fs = require('fs/promises');
const path = require('path');
const crypto = require('crypto');

const contactsPath = path.join(__dirname, '.', 'db', 'contact.json');

const readContact = async () => {
  const contact = await fs.readFile(contactsPath, 'utf8');
  const result = JSON.parse(contact);
  return result;
}

const listContacts = async () => {
  return await readContact();
};

const getContactById = async (contactId) => {
  const contacts = await readContact();
  const [contact] = contacts.filter((contact) => String(contact.id) === String(contactId));
  return contact;
};
  
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

const addContact = async (name, email, phone) => {
  const contacts = await readContact();
  const newContact = { name, email, phone, id: crypto.randomUUID() };
  contacts.push(newContact);
  await fs.writeFile(path.join(contactsPath), JSON.stringify(contacts, null, 2),);
  return newContact;
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
}