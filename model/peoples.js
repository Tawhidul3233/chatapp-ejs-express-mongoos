const mongoos = require('mongoose');

const peopleSchema = mongoos.Schema(
  {
    name:{
      type: String,
      required: true,
      trim: true
    },
    email:{
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },
    mobile: {
      type: String,
      required: true
    },
    password:{
      type: String,
      required: true
    },
    avatar:{
      type: String
    },
    role:{
      type: String,
      enum: ['admin', 'user'],
      default: 'user'
    }
  },
  {
    timestamps: true
  }
);

const People = mongoos.model('people', peopleSchema);
module.exports = People;