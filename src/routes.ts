import { Express, Request, Response } from "express";
import {
  createProductHandler,
  updateProductHandler,
  getProductHandler,
  deleteProductHandler,
  getAllProductHandler,
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
  app.get("/api/sessions", requiresUser(['admin', 'user']), getUserSessionsHandler);

  // Logout
  app.delete("/api/logout", requiresUser(['admin', 'user']), invalidateUserSessionHandler);

  // Create a product
  app.post(
    "/api/product",
    [requiresUser(['admin']), validateRequest(createProductSchema)],
    createProductHandler
  );

  // Update a product
  app.put(
    "/api/product/:productId",
    [requiresUser(['admin']), validateRequest(updateProductSchema)],
    updateProductHandler
  );

  // Get a product
  app.get("/api/product/:productId", requiresUser(['admin', 'user']), getProductHandler);
  app.get("/api/products", requiresUser(['admin', 'user']), getAllProductHandler);

  // Delete a product
  app.delete(
    "/api/product/:productId",
    [requiresUser(['admin']), validateRequest(deleteProductSchema)],
    deleteProductHandler
  );
}