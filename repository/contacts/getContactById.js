const Contact = require("../../model/contacts/Contact");

const getContactById = async (contactId) => {
  const result = await Contact.findById(contactId)
  return result
}

module.exports = getContactById;