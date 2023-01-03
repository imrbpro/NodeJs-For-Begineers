const express=require('express')
const router=express.Router()


let users = [
    {
      "id": 1,
      "username": "Rehan",
      "email": "muhammadrehanbaig@gmail.com"
    },
    {
      "id": 2,
      "username": "Daniyal",
      "email": "daniyal@gmail.com"
    }
  ]

//Get All users
router.get("/",(req,res)=>{
    res.json(users)
})

//Get User by Id
router.get('/:id',(req,res)=>{
    const specificUser = users.filter(x => x.id === 1);
    res.send("The Selected User is : "+res.json(specificUser))
})

//Create or Add new user
router.post("/",(req,res)=>{
    let newuser = {
        "id":3,
        "username": "NewUser",
        "email": "nu@gmail.com"
    }
    users.push(newuser);
    res.send("User Created")
})

//Update Existing User
router.put("/:id",(req,res)=>{
    let newuser = {
        "id":3,
        "username": "NewUserModified",
        "email": "nu@gmail.com"
    }
    users.push(newuser);
    res.send("User Updated")
})

//Delete Existing User
router.delete('/:id',(req,res) => {
    const objWithIdIndex = users.findIndex((obj) => obj.id === 1);

    if (objWithIdIndex > -1) {
      users.splice(objWithIdIndex, 1);
    }
    
    res.send("User Deleted")
    res.send(users);
})

module.exports=router;