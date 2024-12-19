let mongoose = require('mongoose');

// Define the schema
const BookSchema = new mongoose.Schema({
    booktitle: { type: String, required: true },
    PubYear: { type: Number, required: true },
    author: { type: String, required: true },
    Topic: { type: String, required: true },
    formate: { type: String, required: true }
});

module.exports = mongoose.model('bookmodel', BookSchema, 'BookCollection2');


// Export the model
module.exports = mongoose.model('bookmodel', BookSchema, 'BookCollection2');
