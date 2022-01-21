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
const wrapperError = require('../../../midllewares/error-handler');


router.get('/', [guard, validateQuery], wrapperError(listContacts));
router.get('/:id', [guard, validateId], wrapperError(getContactById));
router.post('/', [guard, validateCreate], wrapperError(addContact));
router.delete('/:id', [guard, validateId], wrapperError(removeContact));
router.put('/:id', [guard, validateId, validateUpdate], wrapperError(updateContact));
router.patch('/:id/favorite', [guard, validateId, validateUpdateFavorite], wrapperError(updateContact));

module.exports = router;