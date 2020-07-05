const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  name: String,
  genre: String,
  authorId: String,
});

module.exports = mongoose.model("Book", bookSchema);
//exporting or creating a mongoose model(collection) based off this schema(bookSchema)
