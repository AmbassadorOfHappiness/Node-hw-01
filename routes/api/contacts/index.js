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
} = require("../../../middlewares/validation/contactValidation");
const guard = require("../../../middlewares/guard");
const wrapperError = require('../../../middlewares/error-handler');

 
router.get('/', [guard, validateQuery], wrapperError(listContacts));
router.get('/:id', [guard, validateId], wrapperError(getContactById));
router.post('/', [guard, validateCreate], wrapperError(addContact));
router.delete('/:id', [guard, validateId], wrapperError(removeContact));
router.put('/:id', [guard, validateId, validateUpdate], wrapperError(updateContact));
router.patch('/:id/favorite', [guard, validateId, validateUpdateFavorite], wrapperError(updateContact));

module.exports = router;