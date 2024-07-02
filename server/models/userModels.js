import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
  // cart: [
  //    { itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Item' },
  //     quantity: { type: Number, default: 1 } }
  // ]
});

const User = mongoose.model('User', userSchema);
export default User;
