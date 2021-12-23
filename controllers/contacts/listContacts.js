import contactsOperations from '../../model/contacts';

const listContacts = async (req, res) => {
  const contacts = await contactsOperations.listContacts()
  res.status(200).json(contacts);
}

export default listContacts;