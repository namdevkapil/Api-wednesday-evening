const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_CONNECTION_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}).then( () => console.log('Database Connected!'))
.catch( err => console.log(err))