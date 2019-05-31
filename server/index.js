require('dotenv').config();
const express = require('express');
const controller = require('./controller');
const massive = require('massive');
const app = express();
const {SERVER_PORT, CONNECTION_STRING} = process.env;

app.use(express.json());

massive(CONNECTION_STRING).then(db => {
   app.set('db', db);
   console.log('db linked');
})

app.get('/api/inventory', controller.fetchInventory);
app.post('/api/product', controller.addToInventory);

app.listen(SERVER_PORT, () => console.log(`server listening ${SERVER_PORT}`));