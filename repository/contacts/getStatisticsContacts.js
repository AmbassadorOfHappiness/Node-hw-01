const Contact = require("../../model/contacts/Contact");

const getStatisticsContacts = async (id) => {
  const data = await Contact.aggregate([
    { $match: { owner: Types.ObjectId(id) } },
    {
      $group: {
        _id: 'qweqwe',
        totalAge: { $sum: '$age' },
        minAge: { $min: '$age' },
        maxAge: { $max: '$age' },
        avgAge: { $avg: '$age' },
      },
    },
  ])
  return data
}

module.exports = getStatisticsContacts;
