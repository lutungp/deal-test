import mongoose from "mongoose";
import { v4 as uuidv4 } from 'uuid';
import { ProductDocument } from "../interfaces/product.interface";

const ProductSchema = new mongoose.Schema(
  {
    productId: {
      type: String,
      required: true,
      unique: true,
      default: () => uuidv4(),
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    title: { type: String, default: true },
    description: { type: String, default: true },
  },
  { timestamps: true }
);

const Product = mongoose.model<ProductDocument>("Product", ProductSchema);

export default Product;