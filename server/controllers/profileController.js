const Profile = require('../models/User');
const mongoose = require('mongoose')

module.exports = {
    getProfile: (req, res) => {
        console.log("Get Profile hit")
        Profile.find({ user: req.params.id })
            .populate('listings')
            .then(profile => {
                console.log("Profile", profile)
                res.json(profile)
            })
            .catch(err => console.log(err))

    },
    editUser: (req, res) => {
        console.log("Edit Profile hit", req.params.id, req.body)
        Profile.findById(req.params.id)
        .then((editUser) => {
            console.log("Edit User", editUser)
            editUser.user = req.body.user
            editUser.location = req.body.location
            editUser.save()
            .then((updatedUser) => {
                console.log("Updated User", updatedUser)
                res.json(updatedUser)
            })
            .catch(err => console.log(err))
        })
    },

    // editLocation: (req, res) => {
    //     console.log("Edit Location hit", req.params.id, req.body)
    //     Profile.findByIdAndUpdate(req.params.id)
    //     .then((editLocation) => {
    //         console.log("Edit Location", editLocation)
    //         editLocation.location = req.body.location
    //         editLocation.save()
    //         .then((updatedLocation) => {
    //             console.log("Updated Location", updatedLocation)
    //             res.json(updatedLocation)
    //         })
    //         .catch(err => console.log(err))
    //     })
    // }


}
