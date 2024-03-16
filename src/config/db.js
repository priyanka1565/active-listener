


const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://priyankaingle250:priya1565@cluster0.zrm5cra.mongodb.net/ticket_booking', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            
        });
        console.log('MongoDB Connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;




// //  connecting server to the database 
// const mongoose = require("mongoose");

// const url = `mongodb+srv://priyankaingle250:priya1565@cluster0.zrm5cra.mongodb.net/ticket_booking`

// module.exports = () => {
//     return mongoose.connect(url);
// };

// // database connected 