const Contact = require("../../model/contacts/Contact");

const addContact = async (userId, body) => {
  const result = await Contact.create({...body, owner: userId})
  return result
}

module.exports = addContact;