const repository = require('../../repository/contacts');
const { HttpCode } = require('../../config/constants');

const removeContact = async (req, res, next) => {
  try {
    const contact = await repository.removeContact(req.params.id);
    if (!contact) {
      return res.status(HttpCode.BAD_REQUEST).json({
        status: 'error',
        code: HttpCode.BAD_REQUEST,
        message: `Can't find contact with id: ${req.params.id}`,
        data: contact,
      });
    }
    return res.status(HttpCode.OK).json({
      status: 'success',
      code: HttpCode.OK,
      message: `Contact ${req.params.id} deleted`,
      data: contact,
    });
  } catch (error) {
    return res.status(HttpCode.BAD_REQUEST).json({
      status: 'error',
      code: HttpCode.BAD_REQUEST,
      message: error.message,
    });
  }
}

module.exports = removeContact;