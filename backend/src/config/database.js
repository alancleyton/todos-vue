const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

module.exports = mongoose.connect('mongodb://localhost/todovue', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

