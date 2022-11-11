import { Request, Response } from "express";
import { get } from "lodash";
import {
  createProduct,
  findProduct,
  findAndUpdate,
  deleteProduct,
  getProducts,
} from "../service/product.service";

export async function createProductHandler(req: Request, res: Response) {
  const userId = get(req, "user._id");
  const body = req.body;

  const product = await createProduct({ ...body, user: userId });

  return res.send(product);
}

export async function updateProductHandler(req: Request, res: Response) {
  const userId = get(req, "user._id");
  const productId = get(req, "params.productId");
  const update = req.body;

  const product = await findProduct({ productId });

  if (!product) {
    return res.sendStatus(404);
  }

  if (String(product.user) !== userId) {
    return res.sendStatus(401);
  }

  const updatedProduct = await findAndUpdate({ productId }, update, { new: true });

  return res.send(updatedProduct);
}

export async function getProductHandler(req: Request, res: Response) {
  const productId = get(req, "params.productId");
  const product = await findProduct({ productId });

  if (!product) {
    return res.sendStatus(404);
  }

  return res.send(product);
}

export async function getProductsHandler(res: Response) {
  const product = await getProducts();
  console.log(product)
  if (!product) {
    return res.sendStatus(404);
  }

  return res.send(product);
}

export async function deleteProductHandler(req: Request, res: Response) {
  const userId = get(req, "user._id");
  const productId = get(req, "params.productId");

  const product = await findProduct({ productId });

  if (!product) {
    return res.sendStatus(404);
  }

  if (String(product.user) !== String(userId)) {
    return res.sendStatus(401);
  }

  await deleteProduct({ productId });

  return res.sendStatus(200);
}