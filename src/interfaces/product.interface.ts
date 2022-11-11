import mongoose from "mongoose";
import { UserDocument } from "../model/user.model";

export interface ProductDocument extends mongoose.Document {
    user: UserDocument["_id"];
    title: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}