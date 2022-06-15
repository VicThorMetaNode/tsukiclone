import mongoose from "mongoose";

// ------- CREATE SALES PRODUCT SCHEMA --------------

const SalesProductSchema = new mongoose.Schema({
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

// ------- CREATE SALES PRODUCT MODEL --------------

const SalesProducts =
  mongoose.models.SalesProducts || mongoose.model('SalesProducts', SalesProductSchema);
export default SalesProducts;









