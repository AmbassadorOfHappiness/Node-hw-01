const { Schema, model } = require("mongoose");

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Set name for contact'],
      // trim: true,
      maxLength: [20, "Max length 20 signs"],
    },
    email: {
      type: String,
      required: [true, "Please add your email address"],
      // trim: true,
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

const Contact = model('contact', contactSchema);

module.exports = Contact;