import { Users } from "../models/schema.js";

export const getUsers = async (req, res) => {
    try {
        const usersData = await Users.find()
        res.json(usersData);
        console.log(usersData);
    } catch (error) {
        res.json({message: error.message})
    }
};

export const addUser = async (req, res) => {
    const user = req.body;

    const newUser = new Users(user);
    try {
        await newUser.save();
        res.json(newUser);
    } catch (error) {
        res.json({message: error.message})
    }
}

export const getUserToEditById = async (req, res) => {
    const userID = req.params.id;
    
    try {
        const user = await Users.findById(userID);
        res.json(user);
    } catch (error) {
        res.json({message: error.message})
    }
}

export const editUser = async (req, res) =>{
    const user = req.body;
    const ID = req.params.id;

    try {
        const editUser = new Users(user);
        await Users.updateOne({_id: ID}, editUser);
        res.json(editUser);
    } catch (error) {
        res.json({message: error.message})
    }
}

export const deleteUser = async (req, res) => {
    const ID = req.params.id;
    try {
        await Users.deleteOne({ _id: ID});
        res.json("User Deleted Successfully");
    } catch (error) {
        res.json({message: error.message})
    }
}