const userModel = require("../models/user.model")
const uuidv1 = require('uuid/v1')
exports.checkFirstUserAndCreateIfDontExist = async function () {
    const activationKey = uuidv1()
    const body = {
        email:"fer.lopes.correa@gmail.com",
        telephone:"+55119956908000",
        password:"admin",
        role:"admin",
        name:"admin",
        activationKey:activationKey
    }
 
    const user = new userModel(body)
    try{
        let tryUser = await userModel.findOne({telephone:"+55119956908000"})
        if(!tryUser){
            const savedUser = await user.save()
            return savedUser
        }
       
    }
    catch{
        return null
    }
    
}