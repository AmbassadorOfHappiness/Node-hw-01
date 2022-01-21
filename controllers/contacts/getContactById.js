const repository = require('../../repository/contacts');
const { HttpCode } = require('../../config/constants');
const { CustomError } = require('../../config/custom-error');

const getContactById = async (req, res, next) => {
  const { id } = req.params;
  const { id: userId } = req.user;
  const contact = await repositoryContacts.getContactById(userId, id);
  if (contact) {
    return res
      .status(HttpCode.OK)
      .json({
        status: 'success',
        code: HttpCode.OK,
        message: `You find your contact with id: ${id}`,
        data: { contact },
      });
  }
  throw new CustomError(HttpCode.NOT_FOUND, `Contact '${id}' not found`);
}


module.exports = getContactById;

/*   const { id } = req.params;
  const { id: userId } = req.user;
  try {
    const contact = await repository.getContactById(userId, id);
    if (!contact) {
      return res.status(HttpCode.BAD_REQUEST).json({
        code: HttpCode.BAD_REQUEST,
        message: `Can't find contact with id: ${id}`,
        data: contact,
      });
    }
    return res.status(HttpCode.OK).json({
      code: HttpCode.OK,
      message: `You find your contact with id: ${id}`,
      data: { contact },
    });
  } catch (error) {
    return res.status(HttpCode.NOT_FOUND).json({
      code: HttpCode.NOT_FOUND,
      message: error.message`Contact '${id}' not found`,
    });
  } */