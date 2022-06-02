//Import express
import express from 'express'
//Import data products
import mischiefProductData from './Sales Collection/mischiefProductData.js'

//Initial app object as express function
const app = express();

//app has 2 params: url + req,res to that api url
app.get('/api/products', (req, res) => {
    res.send(mischiefProductData.products); //same data field in frontend as well
});

//define PORT
const port = process.env.PORT || 5000;

//launch server: 2 params: port + callback fct that runs if server ready
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});

// TO START SERVER CMD: NPM START