const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  discipline: {
    type: Number,
    min: 1,
    max: 5
  },
  attention: {
    type: Number,
    min: 1,
    max: 5
  },
  responsibility: {
    type: Number,
    min: 1,
    max: 5
  },
  goal: {
    type: String,
    enum: ['Zeka Geliştirme', 'Hobi', 'Okul Şampiyonluğu', 'Türkiye Şampiyonluğu'],
    //required: true
  },
  classes: [{
    className: {
      type: String,
      //required: true
    },
    classType: {
      type: String,
      enum: ['Özel', 'Grup'],
      //required: true
    },
    classMode: {
      type: String,
      enum: ['Online', 'Sınıf'],
      //required: true
    },
    attendance: [{
      date: {
        type: Date,
       // required: true
      },
      status: {
        type: String,
        enum: ['Geldi', 'Gelmedi'],
        //required: true
      }
    }]
  }]
});

module.exports = mongoose.model('Student', StudentSchema);
