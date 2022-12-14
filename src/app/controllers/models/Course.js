const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const objID = Schema.ObjectId;
const slug = require("mongoose-slug-generator");
const mongooseDelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Course = new Schema(
  {
    _id: { type: Number },
    name: { type: String, match: /[a-z]/, required: true },
    img: { type: String, maxLength: 600 },
    description: { type: String, maxLength: 600 },
    slug: { type: String, slug: "name", unique: true },
    level: { type: String, maxLength: 255 },
    videoId: { type: String },
  },
  { 
    _id: false,// cho mongo khong dong cham vao truong nay
    timestamps: true }
);

mongoose.plugin(slug);

Course.plugin(AutoIncrement);
Course.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: 'all'
})

module.exports = mongoose.model("course", Course);
//planets Tên bảng  trong database test
