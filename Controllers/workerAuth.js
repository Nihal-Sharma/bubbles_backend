const empIDgen = require("../Services/empIDgen")
const workers = require("../Models/workers")
const {generateToken} = require('../Services/jwtToken')

async function workerLogin(req , res){
    console.log("inlogin")
  try{
    const feed = await workers.findOne({phone : req.body.phone , password : req.body.password})
    if(feed){
        const token = generateToken(feed.empID)
        return res.json({status :'success' , token : token})
    }
    else{
        return res.json({
            status :"Credentials not found"
        })
    }
  }
  catch(error){ return res.json({
    status :"Internal Server Error"
})}  
   
}




async function workerRegister(req , res){
    console.log("in register")
    const empID = empIDgen()
    try{
        const check = await workers.findOne({phone : req.body.phone})
       if(!check){ 
        const feed = await workers.create({
        phone : req.body.phone,
        password : req.body.password,
        vehicle : req.body.vehicle,
        empID : empID
    })

    const token = generateToken(feed.empID)
    console.log(token)
    return res.json({status :'success' , token : token})
   }
   else{
    console.log(check.empID)
    return res.json({status :'Phone Number already in use'})}
    }
    catch(error){
        console.log(error)
        return res.json({status : "Internal Server Error"})
    }
    
}



module.exports = {workerLogin , workerRegister}