const mongoose = require('mongoose');

const mongo_url = process.env.MONGO_URL;
console.log("mongoUrl:",mongo_url)
mongoose.connect(mongo_url,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false, // Optional, if you're using findOneAndUpdate
    useCreateIndex: true
})


    .then(() => {
        console.log('MongoDB Connected...')
    }).catch((err) => {
        console.log('Error while MongoDB connecting ...', err);
    })



    