//------ RETURN SALES PRODUCTS LIST FROM DATABASE USING NEXT CONNECT
import nc from 'next-connect'
import SalesProducts from '../../../backend/models/SalesProduct'
import db from '../../../backend/Database/db'

const handler = nc();

handler.get(async(req, res) => {
    await db.connect();
    const products = await SalesProducts.find({}); //find({}) means find all products without any filter
    res.send(products);
})

export default handler;