const express = require('express');
const celo = require('./celocli');
const app = express();

app.use("/", celo);

const port=5000;
app.listen(port, ()=>{console.log(`Listening on port ${port}`)});