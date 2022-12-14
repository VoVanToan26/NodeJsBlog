const { default: mongoose } = require("mongoose");

module.exports = {
  multipleMongooseToObject: function (mongoose) {
    return mongoose.map((mongoose) => mongoose.toObject());
  },
  mongooseToOject: function (mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
  },
};
