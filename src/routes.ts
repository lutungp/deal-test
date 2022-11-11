import { Express, Request, Response } from "express";
import {
  createProductHandler,
  updateProductHandler,
  getProductHandler,
  deleteProductHandler,
  getProductsHandler,
} from "./controller/product.controller";
import { createUserHandler } from "./controller/user.controller";
import {
  createUserSessionHandler,
  invalidateUserSessionHandler,
  getUserSessionsHandler,
} from "./controller/session.controller";
import requiresUser from "./middleware/requiresUser"
import validateRequest from "./middleware/validateRequest"
import {
  createUserSchema,
  createUserSessionSchema,
} from "./schema/user.schema";
import {
  createProductSchema,
  updateProductSchema,
  deleteProductSchema,
} from "./schema/product.schema";

export default function (app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

  // Register user
  app.post("/api/users", validateRequest(createUserSchema), createUserHandler);

  // Login
  app.post(
    "/api/login",
    validateRequest(createUserSessionSchema),
    createUserSessionHandler
  );

  // Get the user's sessions
  app.get("/api/sessions", requiresUser, getUserSessionsHandler);

  // Logout
  app.delete("/api/logout", requiresUser, invalidateUserSessionHandler);

  // Create a product
  app.post(
    "/api/product",
    [requiresUser, validateRequest(createProductSchema)],
    createProductHandler
  );

  // Update a product
  app.put(
    "/api/product/:productId",
    [requiresUser, validateRequest(updateProductSchema)],
    updateProductHandler
  );

  // Get a product
  app.get("/api/product/:productId", getProductHandler);
  app.get("/api/products", getProductsHandler);

  // Delete a product
  app.delete(
    "/api/product/:productId",
    [requiresUser, validateRequest(deleteProductSchema)],
    deleteProductHandler
  );
}