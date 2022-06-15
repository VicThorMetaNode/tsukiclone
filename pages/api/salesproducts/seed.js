//------ POPULATE MODELS WITH SALES PRODUCTS DATA
import nc from 'next-connect'
import SalesProducts from '../../../backend/models/SalesProduct'
import db from '../../../backend/Database/db'
import salesProductData from '../../../utils/salesProductData'

const handler = nc();

handler.get(async(req, res) => {
    await db.connect();
    
  await SalesProducts.deleteMany(); //before to seed we need to delete previous products
  await SalesProducts.insertMany(salesProductData.products); //we populate using data from utils
    res.send({ message: 'Seeded successfully! Hooray !'});
})

export default handler;