let mongoose = require('mongoose');

// MongoDB connection URI
const MONG_URI = 'mongodb://localhost:27017/BooksData';

// Connect to MongoDB
mongoose.connect(MONG_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

// Handle connection events
const db = mongoose.connection;

db.on('error', function (err) {
    console.log('Error occurred: ' + err);
});

db.once('connected', function () {
    console.log('Connection is successful to ' + MONG_URI);
});

// Export the database connection
module.exports = db;
