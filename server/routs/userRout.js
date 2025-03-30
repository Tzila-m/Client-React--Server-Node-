const express = require("express")
const router = express.Router()
const user = require("../controllers/usersController")

router.post("/createUser",user.createUser)
router.get("/getAllUsers",user.getAllUsers)
router.get("/getUserById/:id",user.getUserById)
router.put("/updateUser/:id",user.updateUser)
router.delete("/deleteUser/:id",user.deleteUser)

module.exports = router

