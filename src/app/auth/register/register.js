"use server";

import { collectionList, dbConnect } from "@/lib/dbConnect";
import bcrypt from "bcrypt";

export async function handleRegister(data) {
  const fetch = await (
    await dbConnect(collectionList.userCollection)
  ).findOne({ email: data.email });
  if (fetch) {
    return null;
  }

  const hassedPassword= await bcrypt.hashSync(data.password, 10);
  data.password=hassedPassword;
  const res = await (
    await dbConnect(collectionList.userCollection)
  ).insertOne(data);

  return {
    acknowledged: res.acknowledged,
    insertedId: res.insertedId.toString(), // convert ObjectId to string
  };
}
