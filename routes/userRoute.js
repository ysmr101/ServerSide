const express = require("express");
const Users = require("../models/Users");
const router = express.Router();

//login user view

router.get('/login', (req,res)=>{
  res.render('user/login')
})
//login post request
router.post('/login', (req,res)=>{
  res.json('login in user...')
})
//signup form
router.get('/signup', (req,res)=>{
  res.render('user/signup')
})
//signup post request
router.post('/signup',async (req,res)=>{
 
  try {
       const user = new Users(req.body)
        await user.save()
        console.log(req.body)
        res.json('register in user...')
       //res.send('name is good ')
     } catch (error) {
      
         res.status(400).json(error);
       }
  
})
// router.post('/signup', (req,res)=>{
//   console.log(req.body)
//   res.json('register in user...')
// })
//profile 
router.get('/profile', (req,res)=>{
  res.render('user/profile')
})
//logout user
//router.get('/logout', (req,res)=>{
 // res.json('logout user')
//})
// router.post("/addName", async (req, res) => {
//   try {
//     const user = new Users( req.body)
//     await user.save()
//     res.send('name is good ')
//   } catch (error) {
//     res.status(400).json(error);
//   }
// });


// router.get("/getName", async (req, res) => {
//   try {
//     const name = await Users.find()
//     res.send(name)
//   } catch (error) {
//     res.status(400).json(error);
//   }
// });
module.exports = router