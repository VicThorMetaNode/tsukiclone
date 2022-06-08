import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    oldPrice: { type: Number, required: true },
    newPrice: { type: Number, required: true },
    category: { type: String, required: true },
    countInStock: { type: Number, required: true, default: 0 },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
},
{
    timestamps: true, // to keep records in time
}
);

const Product =
  mongoose.models.Product || mongoose.model('Product', productSchema);
export default Product;









