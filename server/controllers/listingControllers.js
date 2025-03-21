// const axios = require('axios');
const Listing = require('../models/Listing');

const getAllListings = async (req, res) => {
    try {
        const listings = await Listing.find();
        console.log("get all listings hit")
        res.json(listings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getListingById = async (req, res) => {
    try {
        const listing = await Listing.findById(req.params.id);
        if (!listing) return res.status(404).json({ message: "Listing not found" });
        console.log("get single listing hit")
        res.json(listing);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createListing = async (req, res) => {
    try {
        const { title, description, price, userId } = req.body;

        const newListing = new Listing({ title, description, price, user: userId });
        await newListing.save();
        console.log("create listing hit")
        res.status(201).json(newListing);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateListing = async (req, res) => {
    try {
        const listing = await Listing.findById(req.params.id);
        if (!listing) return res.status(404).json({ message: "Listing not found" });

        const updatedListing = await Listing.findByIdAndUpdate(req.params.id, req.body, { new: true });
        console.log("update listing hit")
        res.json(updatedListing);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteListing = async (req, res) => {
    try {
        const listing = await Listing.findById(req.params.id);
        if (!listing) return res.status(404).json({ message: "Listing not found" });

        await listing.remove();
        console.log("delete listing hit")
        res.json({ message: "Listing deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getAllListings, getListingById, createListing, updateListing, deleteListing };
