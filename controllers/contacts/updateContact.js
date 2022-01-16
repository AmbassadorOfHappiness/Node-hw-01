const repository = require('../../repository/contacts');
const { HttpCode } = require('../../config/constants');

const updateContact = async (req, res, next) => {
  const { id } = req.params;
  const { id: userId } = req.user;
  const contact = await repositoryContacts.updateContact(userId, id, req.body);
  if (contact) {
    return res
      .status(HttpCode.OK)
      .json({ status: 'success', code: HttpCode.OK, data: { contact } })
  }
  res
    .status(HttpCode.NOT_FOUND)
    .json({ status: 'error', code: HttpCode.NOT_FOUND, message: 'Not found' });
  // try {
  //   const contact = await repository.updateContact(userId, id, req.body, {
  //     new: true,
  //     runValidators: true
  //   });
  //   if (!contact) {
  //     return res.status(HttpCode.BAD_REQUEST).json({
  //       status: 'error',
  //       code: HttpCode.BAD_REQUEST,
  //       message: `Can't find contact with id: ${id}`,
  //       data: contact,
  //     });
  //   }  
  //   return res.status(HttpCode.OK).json({
  //     status: 'success',
  //     code: HttpCode.OK,
  //     message: `Contact ${id} updated`,
  //     data: contact,
  //   });
  // } catch (error) {
  //   return res.status(HttpCode.BAD_REQUEST).json({
  //     status: 'error',
  //     code: HttpCode.BAD_REQUEST,
  //     message: error.message,
  //   });
  // }
}

module.exports = updateContact;