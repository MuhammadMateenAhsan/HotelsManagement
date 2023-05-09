const express=require('express')
const {getUser,postUser,updateUser,deleteUser,getById,postUserSignUp,postUserLogin,postemployee, getemployee,delemployee,updateemployee, getByIdemployee}=require("../controller/userController")
const router=express.Router()

router.route("/").get(getUser).post(postUser)
router.route("/employee").post(postemployee).get(getemployee)
router.route("/signup").post(postUserSignUp)
router.route("/login").post(postUserLogin)
router.route("/:id").put(updateUser).delete(deleteUser).get(getById)
router.route("/employee/:id").delete(delemployee).put(updateemployee).get(getByIdemployee)

module.exports = router