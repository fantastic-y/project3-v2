const mongoose = require('mongoose');

const BooklistSchema = new mongoose.Schema({
    cover: String,
    title: String,
    author: String,
    genres: String,
    score: Number,
    yourscore: {
        type: Number,
        max: 10
    },
    saved: Boolean
});

module.exports = mongoose.model('Booklist', BooklistSchema);