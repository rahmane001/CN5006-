var express = require('express');
let Books = require('./BooksSchema');
let mongodbConnected = require('./MongoDBConnect');
const cors = require('cors');
var bodyparser = require('body-parser');

// Initialize Express app
var app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cors());

// API Endpoints

// Get all books
app.get('/allbooks', async (req, res) => {
    try {
        const allbooks = await Books.find();
        console.log('Books retrieved:', allbooks); // Log for debugging
        res.status(200).json(allbooks); // Return all books
    } catch (error) {
        console.error('Error retrieving books:', error); // Log any error
        res.status(500).send('Error retrieving books');
    }
});


app.get('/testbooks', async (req, res) => {
    try {
        const books = await Books.find();
        console.log('Books found:', books); // Log for debugging
        res.status(200).json(books);
    } catch (error) {
        console.error('Error with testbooks endpoint:', error); // Log any error
        res.status(500).send('Error retrieving books');
    }
});



// Get a book by ID
app.get('/getbook/:id', async (req, res) => {
    try {
        const book = await Books.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ error: 'Book not found' });
        }
        res.status(200).json(book);
    } catch (err) {
        console.error('Error fetching book by ID:', err);
        res.status(500).send('Error retrieving the book');
    }
});

// Add a new book
app.post('/addbooks', function (req, res) {
    let newbook = new Books(req.body);
    newbook.save()
        .then(() => res.status(200).json({ books: 'book added successfully' }))
        .catch(err => {
            console.error('Validation error:', err);
            res.status(400).send('Adding new book failed: ' + err.message);
        });
});

// Update a book
app.post('/updatebook/:id', async (req, res) => {
    try {
        const updatedBook = await Books.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true } // Return the updated document
        );
        if (!updatedBook) {
            return res.status(404).json({ error: 'Book not found' });
        }
        res.status(200).json({ books: 'Book updated successfully', updatedBook });
    } catch (err) {
        console.error('Error updating book:', err);
        res.status(500).send('Error updating the book');
    }
});



// Delete a book
app.post('/deleteBook/:id', async (req, res) => {
    try {
        const deletedBook = await Books.findByIdAndDelete(req.params.id);
        if (!deletedBook) {
            return res.status(404).json({ error: 'Book not found' });
        }
        res.status(200).send('Book Deleted');
    } catch (err) {
        console.error('Error deleting book:', err);
        res.status(500).send('Error deleting the book');
    }
});


// Start the server
app.listen(4000, function () {
    console.log('Server is running on port 4000');
});
