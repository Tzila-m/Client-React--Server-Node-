const Users = require("../models/Users")

//creat
const createUser = async (req, res) => {

    const { name, username, email, address, phone } = req.body

    if (!name | !username | !email)
        return res.status(400).json({ massage: "Cnnot creat new user with no name / username / email" })

    const userExist = await Users.findOne({ username })
    if (userExist)
        return res.status(400).json({ massage: "This user exist" })

    const user = await Users.create({name, username, email, address, phone})
    const userList = await Users.find().sort({_id:1}).lean()    
    
    if (user)
        return res.status(201).json(userList)

    else
        return res.status(400).json({ massage: "Cannot creat:(" })

}

//read
const getAllUsers = async (req, res) => {
    const users = await Users.find().lean()
        return res.status(201).json(users)
}

const getUserById = async (req, res) => {

    const { id } = req.params
    const user = await Users.findById(id).lean()
    if (!user)
        return res.status(401).json({ massage: "There is no users" })
    return res.json(user)
}
 

//update
const updateUser = async (req, res) => {

    const { name, username, email, address, phone } = req.body
    const {id} = req.params
  
    if ( !email || !address || !phone || !id)
        return res.status(401).json({ massage: "email / address / phone missing" })

    const user = await Users.findById(id).exec()

    if(!user)
        return res.status(400).json(({ messange: 'user is not defined' }))

    user.email = email
    user.address = address
    user.phone = phone

    const updateUser = await user.save()
    const userList = await Users.find().sort({_id:1}).lean()
    
    return res.status(201).json(userList)
}

//delete
const deleteUser = async (req, res) => {
    const { id } = req.params
    const user = await Users.findById(id).exec()

    if(!user)
        return res.status(401).json({ massage: "This user not exist:(" })

    await user.deleteOne()
    const userList = await Users.find().sort({_id:1}).lean()

    return res.status(201).json(userList)
}

module.exports = {createUser, getAllUsers, getUserById, updateUser,deleteUser}


