const mongoose = require('mongoose')
const Auth = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')

module.exports = {
    register: (req, res) => {

        console.log("Reg hit", req)

        Auth.findOne({ username: req.body.username })
            .then(found => {
                console.log("found", found)
                if (!found) {
                    console.log("Unique Username")
                    const hash = bcrypt.hashSync(req.body.password, 10)
                    console.log("HASH", hash)

                    const newUser = new Auth(
                        {
                            username: req.body.username,
                            password: hash
                        }
                    )

                    Auth.create(newUser)
                        .then(created => {
                            console.log("created", created)
                        })


                } else {
                    console.log("Username TAKEN")
                }
            })
            .catch(err => console.log(err))


    },

    login: (req, res) => {
        console.log("login", req.body)

        Auth.findOne({ username: req.body.username })
            .then(found => {
                console.log("found", found)

                if (bcrypt.compareSync(req.body.password, found.password)) {
                    console.log("Good Login")

                    const token = jwt.sign({ username: found.username, _id: found._id }, process.env.SECRET_KEY, {
                        expiresIn: '1h'
                    })

                    console.log("TOKEN", token)

                    res
                        .cookie("token", token, {
                            httpOnly: true,
                            maxAge: 3600000
                        })
                        .json({ msg: "good login", found })



                }

                else {
                    console.log("Bad Login")
                    res.json({ msg: "Bad LOGIN" })
                }

            })
    },

    authCheck: (req, res) => {
        console.log("AUTH CHECK", req.user, req.headers.cookie)

    }


}




// const axios = require('axios');
// const User = require('../models/User');
// const mongoose = require('mongoose')
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// const registerUser = async (req, res) => {
//     console.log("REg user hit", req.body)
//     try {
//         const { name, email, password } = req.body;
        
//         let user = await User.findOne({ email });
//         if (user) return res.status(400).json({ message: "User already exists" });

//         const hashedPassword = await bcrypt.hash(password, 10);

//         user = new User({ name, email, password: hashedPassword });
//         await user.save();
//         console.log("register route hit")
//         res.status(201).json({ message: "User registered successfully" });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// const loginUser = async (req, res) => {
//     console.log("login route hit")      
//     try {
//         const { email, password } = req.body;
//         const user = await User.findOne({ email });

//         if (!user) return res.status(400).json({ message: "Invalid credentials" });

//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

//         const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
       
//         res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// module.exports = { registerUser, loginUser };
