const repository = require('../../repository/contacts');
const { HttpCode } = require('../../config/constants');
const { CustomError } = require('../../config/custom-error');

const removeContact = async (req, res, next) => {
  const { id } = req.params;
  const { id: userId } = req.user;
  const contact = await repository.removeContact(userId, id);

  if (contact) {
    return res.status(HttpCode.OK).json({
      status: 'success',
      code: HttpCode.OK,
      message: `Contact ${id} deleted`,
      data: contact,
    });
  }

  throw new CustomError(HttpCode.NOT_FOUND, `Can't find contact with id: ${id}`);
}

module.exports = removeContact;