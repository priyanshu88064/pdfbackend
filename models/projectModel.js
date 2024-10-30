const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  filePath: String,
  textBoxes: [
    {
      width: String,
      height: String,
      x: Number,
      y: Number,
      value:String
    },
  ],
  checkBoxes: [
    {
      width: String,
      height: String,
      x: Number,
      y: Number,
      value:String,
      isChecked:Boolean
    },
  ],
  radioButtons: [
    {
      width: String,
      height: String,
      x: Number,
      y: Number,
      value:String,
    },
  ],
  dropdowns: [
    {
      width: String,
      height: String,
      x: Number,
      y: Number,
      value:String,
    },
  ],
});

module.exports = mongoose.model("project", projectSchema);
