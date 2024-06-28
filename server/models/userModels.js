import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        unique:String,
        require:true,
    },
    password:{
        type:String,
        required:true,
    },
    cart:[
       { itemId:{type:mongoose.Schema.Types.ObjectId,ref:'Item'},
        quantity:{type:Number,default:1}}
    ]
});

const User = mongoose.model('User',userSchema);
export default User;