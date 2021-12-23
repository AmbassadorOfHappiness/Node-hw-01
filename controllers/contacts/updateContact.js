import contactsOperations from '../../model/contacts';

const updateContact = async (req, res) => {
  const { id } = req.params;
  const contact = await contactsOperations.updateContact(id, req.body);
  if (contact) {
    return res.status(200).json(contact);
  }
  res.status(404).json({ message: `Contact ${id} not found` });
}

export default updateContact;