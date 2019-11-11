const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  name: { type: String, required: true },
  ingredients: { type: String, required: true },
  method: String,
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
