const User = require('../models/User')
//const Product = require('../models/Products')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')

// @desc Get all users
// @route GET /users
// @access Private
const getUser = asyncHandler(async(req, res) =>{
    const users = await User.find().select('-password').lean()
    if (!users?.length) {
        return res.status(400).json({'message': 'No users found'})
    }
    res.json(users)

})
// desc Create new user
// route POST /users
// access Private
const createUser = asyncHandler(async(req, res) =>{
    // get data from the frontend
    const { username, email, password, address, roles} = req.body
    // validation 
    if (!username || !email || !password) {
        return res.status(400).json({message: "All fields are required"})
    }
    //look for duplication using email
    const duplication = await User.findOne({ email }).lean().exec()
    if (duplication) {
        return res.status(409).json({message: "User already exists"})
    }
    //Hash the password
    const hashedPass = await bcrypt.hash(password, 10)
    //create and store the new user
    const user = await User.create({ username, email, password: hashedPass, address, roles})
    if (user) {
        res.status(201).json({message: `New user ${username} created`})
    }
    else {
        res.status(400).json({message: "Invalid user data recieved"})
    }
})
// desc Update a user
// route PATCH /users/:id
// access Private
const updateUser = asyncHandler(async(req, res) =>{
    const { id, username, email, password, address, roles, active} = req.body
    if (!id || !username || !email || !typeof(active) == Boolean) {
        return res.status(400).json({message: "All fields are required"})
    }
    const user = await User.findById(id).exec()
    if (!user) {
        return res.status(400).json({message: "User not found"})
    }
    //check for duplication
    //const duplication = await User.findOne({ email }).lean().exec()
    // we dont want to set the new info to one that elready exists
    //if (duplication  && duplication?._id !== id) {
        //return res.status(409).json({message: "Dublicate email"})
    //}
    user.username = username
    user.email = email
    // we dont want to require the user to always send in a pass update when they update any other data
    if (password) {
        user.password = await bcrypt.hash(password, 10)
    }
    user.address = address || user.address
    user.roles = roles || user.roles
    user.active = active || user.active
    const updatedUser = await user.save()
    res.json({message: `User ${updatedUser.username} is updated`})
})
// desc Delete a user
// route DELETE /users/:id
// access Private
const deleteUser = asyncHandler(async(req, res) =>{
    const { id } = req.body
    if (!id) {
        return res.status(400).json({message: "User ID required"})
    }
    const user = await User.findById(id).exec()
    if (!user) {
        return res.status(400).json({message: "User not found"})
    }
    const result = await user.deleteOne()
    const reply = `Username ${result.username} with ID ${result._id} is deleted`
    res.json(reply)
    
})
module.exports = {
    getUser,
    createUser,
    updateUser,
    deleteUser
}