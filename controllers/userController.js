const User =require("../models/User");
// create
exports.createUser = async (req,res) =>{
    try {
    const user  = await
User.create(req.body);
    res.status(201).json(user);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};
// Read All
exports.getUsers = async (req,res) => {
    try {
    const users = await User.find();
    res.json(users);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

// Read One 
exports.getUser = async (req, res) =>{
    try {
    const user = await 
User.findBYId(req.params.id);
    res.json(user);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

// Update 
exports.updateUser = async (req, res) =>{
    try {
    const user = await
User.findBYIdAndUpdate(
      req.params.id,
      req.body,
      { new: true}    
);
res.json(user);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

//Delete
exports.deleteUser = async (req,res) => {
    try {
    await
User.findBYIdAndDelete(req.params.id);
    res.json({message: "User deleted" });
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};