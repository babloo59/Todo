const mongoose = require('mongoose');

require('dotenv').config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then( () => console.log("DB connects successfully"))
    .catch( (error) => {
        console.log("Issue in connecting DB");
        console.error(error.massage);
        process.exit(1);
    });
}

module.exports = dbConnect;