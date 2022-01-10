const express = require("express");
const router = express.Router();
const {
  listContacts,
  getContactById,
  addContact,
  updateContact,
  removeContact,
} = require("../../../controllers/contacts");

const {
  validateCreate,
  validateUpdate,
  validateUpdateFavorite,
  validateId,
  validateQuery
} = require("../../../midllewares/validation/contactValidation");

const guard = require("../../../midllewares/guard");

router.get('/', [guard, validateQuery], listContacts);
router.get('/:id', [guard, validateId], getContactById);
router.post('/', [guard, validateCreate], addContact);
router.delete('/:id', [guard, validateId], removeContact);
router.put('/:id', [guard, validateId, validateUpdate], updateContact);
router.patch('/:id/favorite', [guard, validateId, validateUpdateFavorite], updateContact);

module.exports = router;