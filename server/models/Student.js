var mongoose = require('mongoose');

var Student = mongoose.model('Student', {

  Name: {
    type: String, require: true, trim: true, minlength: 1
  },
  class: {
    type: String
  },
  email: {
    type: String, require: true, trim: true, minlength: 1
  },
  Address: {
    type: String, require: true, trim: true, minlength: 1
  }
});

module.exports = {Student};
