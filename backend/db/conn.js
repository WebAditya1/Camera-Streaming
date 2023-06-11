const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const DB = 'mongodb+srv://himanshu:3ZZCl9RAp6hdB92X@cluster0.hchmp.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
})
.then(()=>{
    console.log("database connected");
})
.catch((err)=>{
    console.error("Error connecting to database:", err);
})

