const repository = require("../../repository/contacts");
const { HttpCode } = require("../../config/constants");

const addContact = async (req, res, next) => {
  const { id: userId } = req.user;
  const newContact = await repository.addContact(userId, req.body);
  return res
    .status(HttpCode.CREATED)
    .json({
      status: "success",
      code: HttpCode.OK,
      data: { contact: newContact }
    });
};

module.exports = addContact;