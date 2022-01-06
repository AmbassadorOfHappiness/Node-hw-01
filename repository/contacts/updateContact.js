const Contact = require("../../model/contacts/Contact");

const updateContact = async (contactId, body) => {
  const result = await Contact.findByIdAndUpdate(
    contactId,
    { ...body },
    { new: true },
  )
  return result;
}

module.exports = updateContact;