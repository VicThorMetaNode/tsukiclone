import nc from "next-connect";
import { dbConnect } from "../../../utilities/Database/db";
import Product from '../../../Backend/models/Product'

const handler = nc();

handler.get(async(req, res) => {
    await dbConnect();
    const products = await Product.find({}); //find({}) means find all products without any filter
    res.send(products);
})

export default handler;