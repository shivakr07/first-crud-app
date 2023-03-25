
import User from '../models/user-model.js';
import mongoose from 'mongoose';
export const addUser = async(request, response) => {
    // console.log('Hello');
    const user = request.body;
    console.log(user);
    const newUser = new User(user);

    try{
        await newUser.save();
        response.status(201).json(newUser)
    }catch(error){
        response.status(409).json({message : error.message });
    }
}