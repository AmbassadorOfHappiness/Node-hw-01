const repository = require('../../repository/contacts');
const { HttpCode } = require('../../config/constants');

const listContacts = async (req, res, next) => {
  // console.log(req.query)
  const contacts = await repository.listContacts(req.query)
  res
    .status(HttpCode.OK)
    .json({ status: 'success', code: HttpCode.OK, data: { ...contacts } });
}

module.exports = listContacts;