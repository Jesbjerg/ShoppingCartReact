import { ObjectId } from "bson";

export class Product {
  id!: ObjectId;
  name!: string;
  price!: number;
  description!: string;
  category?: string;
}
