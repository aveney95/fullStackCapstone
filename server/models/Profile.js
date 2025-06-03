const mongoose = require("mongoose")
const Schema = mongoose.Schema
const listing = require('./Listing') 


const ProfileSchema = new Schema(
    {
        user:
        {
            type: String,
            required: true,
        
        }
        ,
        location: {
            type: String,
            required: true

        },
        listings: {
            type: { type: mongoose.Schema.Types.ObjectId, ref: 'listing' },

            

        },
    }
)
const Profile = mongoose.model('Profile', ProfileSchema)

module.exports = Profile