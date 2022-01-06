const Contact = require("../../model/contacts/Contact");

const removeContact = async (contactId) => {
  const result = await Contact.findByIdAndRemove(contactId);
  return result;
};

module.exports = removeContact;