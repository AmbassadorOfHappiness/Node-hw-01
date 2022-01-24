const { Schema, SchemaTypes, model } = require("mongoose");
const { MIN_AGE, MAX_AGE } = require('../../config/constants');

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Set name for contact'],
      maxLength: [20, "Max length 20 signs"],
    },
    age: {
      type: Number,
      min: MIN_AGE,
      max: MAX_AGE,
      default: null,
    },
    email: {
      type: String,
      required: [true, "Please add your email address"],
      lowercase: true,
      unique: true,
      maxLength: [50, "Max length 50 signs"],
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: SchemaTypes.ObjectId,
      ref: 'user',
      required: true,
    },
}, {
  versionKey: false,
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform(doc, ret) {
      delete ret._id
      return ret
     }
  },
  toObject: { virtuals: true }
});

contactSchema.virtual('status').get(function () {
  if (this.age >= 40) {
    return 'old'
  }
  return 'young'
})

const Contact = model('contact', contactSchema);

module.exports = Contact;