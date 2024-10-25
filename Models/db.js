const mongoose = require('mongoose')


mongoose.connect('mongodb+srv://swamitechnotidetech:YRNQWvp20giJWZnk@cluster0.i98xi.mongodb.net/Employee_Portal?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
    console.log('DB Connection Established');
})
.catch((err) => console.log(err));