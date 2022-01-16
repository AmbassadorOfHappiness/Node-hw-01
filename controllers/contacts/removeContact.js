const repository = require('../../repository/contacts');
const { HttpCode } = require('../../config/constants');

const removeContact = async (req, res, next) => {
  const { id } = req.params;
  const { id: userId } = req.user;
  try {
    const contact = await repository.removeContact(userId, id);
    if (!contact) {
      return res.status(HttpCode.BAD_REQUEST).json({
        status: 'error',
        code: HttpCode.BAD_REQUEST,
        message: `Can't find contact with id: ${id}`,
        data: contact,
      });
    }
    return res.status(HttpCode.OK).json({
      status: 'success',
      code: HttpCode.OK,
      message: `Contact ${id} deleted`,
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