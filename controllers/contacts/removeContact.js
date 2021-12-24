import contactsOperations from '../../model/contacts';

const removeContact = async (req, res) => {
  const { id } = req.params;
  const contact = await contactsOperations.removeContact(id);
  if (contact) {
    return res.status(200).json({ message: `Contact ${id} deleted` });
  }
  res.status(404).json({ message: `Contact ${id} not found` });
};

export default removeContact;