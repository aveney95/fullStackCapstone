const express = require('express');
const {
    getAllListings,
    getListingById,
    createListing,
    updateListing,
    deleteListing
} = require('../controllers/listingControllers');

const router = express.Router();

// Get all listings
router.get('/', getAllListings);

// Get a single listing by ID
router.get('/:id', getListingById);

// Create a new listing
router.post('/', createListing);

// Update a listing
router.put('/:id', updateListing);

// Delete a listing
router.delete('/:id', deleteListing);

module.exports = router;
