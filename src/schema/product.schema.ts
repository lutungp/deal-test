import { object, string } from "yup";

const payload = {
  body: object({
    title: string().required("Title is required"),
    description: string()
      .required("Description is required")
      .min(10, "Description is too short - should be 10 chars minimum."),
  }),
};

const params = {
  params: object({
    productId: string().required("productId is required"),
  }),
};

export const createProductSchema = object({
  ...payload,
});

export const updateProductSchema = object({
  ...params,
  ...payload,
});

export const deleteProductSchema = object({
  ...params,
});