import mongoose from 'mongoose';

const Schema = mongoose.Schema

const userSchema = new Schema({
  username: { 
    type: String, 
    required: [true, 'Username is required'], 
    unique: true,
    minlength: [4, 'Username must be at least 4 characters long'],
    maxlength: [14, 'Username cannot be more than 14 characters long'],
    match: [/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  }
})

const User = mongoose.Model('User', userSchema)

export default User

// Password complexity validation pre-save hook
// userSchema.pre('save', async function(next) {
//   const password = this.password;

//   // Define the password complexity requirement regex
//   const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/;
//   // Check if the password meets the complexity requirements
//   if (!passwordRegex.test(password)) {
//     next(new Error('Password must be at least 8 characters long and include at least one uppercase letter, one special character, and one number.'));
//   } else {
//     // Only hash the password if it has been modified (or is new)
//     if (this.isModified('password')) {
//       try {
//         const salt = await bcrypt.genSalt(10); // Generate a salt
//         this.password = await bcrypt.hash(this.password, salt); // Hash the password with the salt
//         next();
//       } catch (error) {
//         next(error);
//       }
//     } else {
//       next();
//     }
//   }
// });
