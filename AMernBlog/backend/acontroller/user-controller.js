import User from "../amodel/user-model";
import bcrypt from 'bcryptjs'


export const getAllUser = async (req, res, next)=>{
    let users ; 
    try {
        users =await User.find()
    } catch (error) {
        return console.log(error);
    }

    if(!users){
        return res.status(404).json({message:" no user"})
    }
    return res.status(200).json({users})
}

export const signUp =async (req, res, next)=>{
    const {name, email, password}= req.body
 let existingUser;
 try {
     existingUser = await User.findOne(email)
 } catch (error) {
     return console.log(error)
 } 
 if(existingUser){
    return res.status(400).json(message:" user exist ")
    }  

    const hashedPassword = bcrypt.hashSync(password)

    const newUser = new User({
        name, 
        email, 
        password: hashedPassword
    })

    try {
      newUser.save()
    } catch (error) {
        return console.log(error)
    }

    return res.status(201).json({newUser})
}

export const logIn = async(req,res, next)=>{
    const {email, password} = req.body

}