import contactsOperations from '../../model/contacts';

const addContact = async (req, res) => {
  const newContact = await contactsOperations.addContact(req.body)
  res.status(201).json(newContact);
}

export default addContact;