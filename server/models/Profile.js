const mongoose = require("mongoose")
const Schema = mongoose.Schema 

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
            type: [{}],
            

        },
    }
)
const Profile = mongoose.model('Profile', ProfileSchema)

module.exports = Profile