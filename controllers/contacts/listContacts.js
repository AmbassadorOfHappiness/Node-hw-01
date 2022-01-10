const repository = require('../../repository/contacts');
const { HttpCode } = require('../../config/constants');

const listContacts = async (req, res, next) => {
  const { id: userId } = req.user;
  const contacts = await repository.listContacts(userId, req.query)
  res
    .status(HttpCode.OK)
    .json({ status: 'success', code: HttpCode.OK, data: { ...contacts } });
}

module.exports = listContacts;