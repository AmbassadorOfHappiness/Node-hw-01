import {Router} from 'express';
import {
  listContacts,
  getContactById,
  addContact,
  updateContact,
  removeContact,
} from '../../controllers/contacts/index';
import { validateCreate, validateUpdate, validateId } from '../../midllewares/validation/contactValidation'
const router = new Router();

router.get('/', listContacts);
router.get('/:id', validateId, getContactById);
router.post('/', validateCreate, addContact);
router.delete('/:id', validateId, removeContact);
router.put('/:id', validateId, validateUpdate, updateContact)

export default router;
