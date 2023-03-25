// // or user schema 
// import mongoose from "mongoose";

// import autoIncrement from 'mongoose-auto-increment';


// const userSchema = mongoose.Schema({
//     name : String,
//     username : String,
//     email : String,
//     phone : String,
    
// })
// autoIncrement.initialize(mongoose.connection);
// // userSchema.plugin(autoIncrement.plugin, 'user');
// userSchema.plugin(autoIncrement.plugin, 'user');
// const user = mongoose.model('user', userSchema);
// export default user;

// ----------------------------------------------------

import mongoose from 'mongoose';
import AutoIncrementFactory from 'mongoose-sequence';

const AutoIncrement = AutoIncrementFactory(mongoose);

const userSchema =  mongoose.Schema({
  name: String,
  username : String,
  email: String,
  phone : String,
  // Add an id field to the schema, and set it to be an auto-incrementing number
  id: {
    type: Number,
    unique: true
  }
});

// Add the auto-increment plugin to the schema
userSchema.plugin(AutoIncrement, {inc_field: 'id'});

const user = mongoose.model('user', userSchema);

export default user;
