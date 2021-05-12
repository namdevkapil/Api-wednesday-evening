const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://dhanesh-malviya:dhanesh123@mastercluster.i7cpa.mongodb.net/wedeveningapi?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}).then( () => console.log('Database Connected!'))
.catch( err => console.log(err))