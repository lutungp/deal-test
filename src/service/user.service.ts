import { DocumentDefinition, FilterQuery } from "mongoose";
import { omit } from "lodash";
import UserModel, { UserDocument } from "../model/user.model";

export async function createUser(input: DocumentDefinition<UserDocument>) {
  try {
    return await UserModel.create(input);
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function validatePassword({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    const user = await UserModel.findOne({ email });
  
    if (!user) {
      return false;
    }
  
    const isValid = await user.comparePassword(password);
  
    if (!isValid) return false;
  
    return omit(user.toJSON(), "password");
  }
  
  export async function findUser(query: FilterQuery<UserDocument>) {
    return UserModel.findOne(query).lean();
  }