const repository = require('../../repository/contacts');
const { HttpCode } = require('../../config/constants');

const getContactById = async (req, res, next) => {
  try {
    const contact = await repository.getContactById(req.params.id);
    if (!contact) {
      return res.status(HttpCode.BAD_REQUEST).json({
        code: HttpCode.BAD_REQUEST,
        message: `Can't find contact with id: ${req.params.id}`,
        data: contact,
      });
    }
    return res.status(HttpCode.OK).json({
      code: HttpCode.OK,
      message: `You find your contact with id: ${req.params.id}`,
      data: contact,
    });
  } catch (error) {
    return res.status(HttpCode.NOT_FOUND).json({
      code: HttpCode.NOT_FOUND,
      message: error.message`Contact '${req.params.id}' not found`,
    });
  }
}

module.exports = getContactById;
