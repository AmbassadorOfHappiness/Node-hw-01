const listContacts = require('./listContacts');

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const [contact] = contacts.filter((contact) => String(contact.id) === String(contactId));
  return contact;
};

module.exports = getContactById;