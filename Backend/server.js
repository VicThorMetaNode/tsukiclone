//Import express
import express from 'express'
//Import data products
import mischiefProductData from './Sales Collection/mischiefProductData.js'

//Initial express as function
const app = express();

app.get('/api/products', (req, res) => {
    res.send(mischiefProductData.products);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
