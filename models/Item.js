const mongoose = require('mongoose');
// Ensure the Category model is processed by Mongoose
require('./Category.js');

const itemSchema = require('./ItemSchema.js');

module.exports = mongoose.model('Item', itemSchema);