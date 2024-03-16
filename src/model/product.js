const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            unique: true
        },
    title: String,
    category: String,
    file: String
});

module.exports = mongoose.model('Product', productSchema);
