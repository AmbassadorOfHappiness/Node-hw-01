const Contact = require("../../model/contacts/Contact");

const getContactById = async (userId, contactId) => {
  const result = await Contact.findOne({
    _id: contactId,
    owner: userId
  }).populate({
    path: 'owner',
    select: 'name email phone role'
  })
  return result
}

module.exports = getContactById;