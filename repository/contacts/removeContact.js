const Contact = require("../../model/contacts/Contact");

const removeContact = async (userId, contactId) => {
  const result = await Contact.findOneAndRemove({
    _id: contactId,
    owner: userId
  });
  return result;
};

module.exports = removeContact;