const UserModel = require("../models/userModel")
const Auth = require("../models/Auth");
const Addemployee = require("../models/Addemployee");
// const router = express.Router();
// const multer = require("multer");

const getUser=async(req,res)=>{
    
    try{
        const data = await UserModel.find();
        res.status(200).send(data)
    }catch(err){
        res.status(500).send(err)
    }
}
// get employee function
const getemployee = async(req,res)=>{
    try {
        const data=await Addemployee.find();
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send(error)
    }
}
// add employee function
const postemployee=async (req,res)=>{
    const data = await Addemployee(req.body)
    try {
        const e_already_exist = await Addemployee.findOne({
            email:req.body.email
        })
        if(e_already_exist){
            res.status(500).json({
                message:"Employee already exist",
                
            })
        }else{
            data.save()
            res.status(200).json({
                message:"Employee successfuly added",
                e_already_exist,
            })
        }
    } catch (error) {
        res.json(error)
    }
}

// get by id and edit employee
const getByIdemployee=async(req,res)=>{
    
    try {
        const User=await Addemployee.findById(req.params.id);
        res.json(User) 
    } catch (error) {
        res.send(error)
    }
}

// API for Signup function
const postUserSignUp=async(req,res)=>{
    const data = await Auth(req.body)
    try {
        const userAlreadyExist = await Auth.findOne({
            email:req.body.email
        })
        if(userAlreadyExist){
res.json("user already exist")
        }else{
            data.save()
res.json("Signup successfully")
        }
    } catch (error) {
res.json("Signup error")
        
    }
}

// API for Login function
const postUserLogin = async(req,res)=>{
    try {
        const userAlreadyExist = await Auth.findOne({
            email:req.body.email,
            password:req.body.password
        })
        if(userAlreadyExist){
            res.status(200).json({
                message: "Login successful",
                userAlreadyExist,
              })

        }else{
res.json("error: Email or password is incorrect.")
        }
    } catch (error) {
res.json("Login error")
        
    }
}

// get by id and edit
const getById=async(req,res)=>{
    
    try {
        const User=await UserModel.findById(req.params.id);
        res.json(User) 
    } catch (error) {
        res.send(error)
    }
}

const postUser=async(req,res)=>{
    try{
        const User=await UserModel(req.body);
        const data=await User.save();
        console.log(data)
        res.json(data) //used to send data in db
    }catch(error){
console.log(error)
    }
}

const updateUser = async (req, res) => {
    const id = req.params.id;
    const update = req.body;
  
    try {
      const updatedUser = await UserModel.findOneAndUpdate({ _id: id }, update, { new: true });
      res.json(updatedUser);
    } catch (error) {
      console.log("error in update ", error);
      res.sendStatus(500);
    }
  };
 
//   update employee
const updateemployee = async (req, res) => {
    const id = req.params.id;
    const update = req.body;
  
    try {
      const updatedemployee = await Addemployee.findOneAndUpdate({ _id: id }, update, { new: true });
      res.json(updatedemployee);
    } catch (error) {
      console.log("error in update ", error);
      res.sendStatus(500);
    }
  };
// del employee
const delemployee=async(req,res)=>{
    try {
        const employee=await Addemployee.findByIdAndDelete(req.params.id);
        const variable=await employee()
        res.json(variable) 
    } catch (error) {
        res.send(error)
    }
}
// dell user
const deleteUser=async(req,res)=>{
try {
    const User=await UserModel.findByIdAndDelete(req.params.id);
    const variable=await User()
    res.json(variable) 
} catch (error) {
    res.send(error)
}

}

module.exports={getUser,postUser,updateUser,deleteUser,getById,postUserSignUp,postUserLogin, postemployee, getemployee,delemployee,updateemployee, getByIdemployee}