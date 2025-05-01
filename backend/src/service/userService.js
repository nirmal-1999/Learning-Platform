import { User } from "../models/userModel.js";

const saveUserDetails = async (req, res, next) => {
    try {
        const {name, preferred_username, email} = req.body;
        console.log("User login or register request: ", preferred_username);

        const existUser = await User.findOne({username: preferred_username});
        if(existUser) {
            console.log("User already exists");
            return res.status(200).json({message: "User already exists."});
        }

        const newUser = new User({
            username: preferred_username,
            email: email,
            name: name
        });

        const saveUser = await newUser.save();
        console.log("User saved successfully");
        return res.status(201).json({message: "User saved successfully"});
    }
    catch(error) {
        console.error("Error saving user: ", error);
        return res.status(500).json({error: "server error while saving user"});
    }
}

export {saveUserDetails};