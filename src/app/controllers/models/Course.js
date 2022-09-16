const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const objID = Schema.ObjectId;
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);
const Course = new Schema(
  {
    id: objID,
    name: { type: String, match: /[a-z]/, required: true },
    img: { type: String, maxLength: 600 },
    description: { type: String, maxLength: 600 },
    slug: { type: String, slug: "name", unique: true },
    level: { type: String, maxLength: 255 },
    videoId: { type: String },
  },
  { timestamps: true }
);
module.exports = mongoose.model("course", Course);
//planets Tên bảng  trong database test
