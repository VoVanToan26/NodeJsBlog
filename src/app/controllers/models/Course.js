const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const objID = Schema.ObjectId;

const Course = new Schema({
  id: objID,
  name: { type: String, match: /[a-z]/, default: "" },
  img: { type: String, maxLength: 255 },
  slug: { type: String },
  createDate: { type: Date, default: Date.now },
  updateDate: { type: Date, default: Date.now },
});
module.exports = mongoose.model("courses", Course);
//planets Tên bảng  trong database test
