const mongoose = require('mongoose')  

const ListingSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const Listing =  mongoose.model('Listing', ListingSchema);
module.exports = Listing;      