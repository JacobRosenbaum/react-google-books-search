const express = require('express');
const router = express.Router();
const Books = require('../models/books');

router.get('/books', (req, res, next) => {
		Books
		.find({}, 'item')
		.then(data => res.json(data))
		.catch(next)
});

router.post('/books', (req, res, next) => {
    if (req.body.item) {
        Books
            .create(req.body)
            .then(data => res.json(data))
            .catch(next);
    }
    else {
        res.json({ error: "The item field is empty" })
    }
});

router.delete('/books/:id', (req, res, next) => {
    Books.findOneAndDelete({ "_id": req.params.id })
        .then(data => res.json(data))
        .catch(next)
})

module.exports = router;