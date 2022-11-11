import {
    DocumentDefinition,
    FilterQuery,
    UpdateQuery,
    QueryOptions,
  } from "mongoose";
import { ProductDocument } from "../interfaces/product.interface";
  import Product from "../model/product.model";
  
  export function createProduct(input: DocumentDefinition<ProductDocument>) {
    return Product.create(input);
  }
  
  export async function getProducts() {
    const all = await Product.find();
    return all;
  }

  export function findProduct(
    query: FilterQuery<ProductDocument>,
    options: QueryOptions = { lean: true }
  ) {
    return Product.findOne(query, {}, options);
  }
  
  export function findAndUpdate(
    query: FilterQuery<ProductDocument>,
    update: UpdateQuery<ProductDocument>,
    options: QueryOptions
  ) {
    return Product.findOneAndUpdate(query, update, options);
  }
  
  export function deleteProduct(query: FilterQuery<ProductDocument>) {
    return Product.deleteOne(query);
  }