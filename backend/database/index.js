const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost/mvp', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => { console.log('Connected to Mongo') })
.catch((err) => { console.log(err) });

module.exports = db;