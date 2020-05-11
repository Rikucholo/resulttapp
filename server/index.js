const mongoose = require('mongoose');
const express = require('express');
const config = require('./config/dev.js');
const FakeDb = require('./fake-db');
const productRoutes = require('./routes/products');

mongoose.connect(config.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    const fakeDb = new FakeDb();
    fakeDb.init();
});

const app = express();
app.use('/api/v1/products', productRoutes);

const PORT = process.env.PORT || '3001';

app.listen(PORT, () => {
    console.log('i am runnning');
});