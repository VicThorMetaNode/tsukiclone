import nc from "next-connect";
import { dbConnect } from "../../utilities/Database/db";
import Product from "../../Backend/models/Product";
import mischiefProductData from "../../utilities/Sales Collection/mischiefProductData";

const handler = nc(); //initialize next-connect

handler.get(async (req, res) => {
  await dbConnect();
  await Product.deleteMany(); //before to seed we need to delete previous products
  await Product.insertMany(mischiefProductData.products); //we populate using data from utils
  res.send({ message: "seeded successfully" }); //render a message if successful
});

export default handler;
