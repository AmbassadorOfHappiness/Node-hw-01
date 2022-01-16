const Contact = require("../../model/contacts/Contact");

const updateContact = async (userId, contactId, body) => {
  const result = await Contact.findOneAndUpdate(
    {
    _id: contactId,
    owner: userId
    },
    { ...body },
    { new: true },
  )
  return result;
}

module.exports = updateContact;