import mongoose from "mongoose";

interface Connects extends mongoose.Document {
  Name: String;
  Email: String;
  Phone: String;
  Message: String;
}

type myConnModel = mongoose.Model<Connects>;

const myConnSchema = new mongoose.Schema<Connects, myConnModel>({
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Phone: {
    type: String,
    required: true,
  },
  Message: {
    type: String,
    required: true,
  },
});

export const modelConnect: myConnModel =
  mongoose.models.myconnects ??
  mongoose.model<Connects, myConnModel>("myconnects", myConnSchema);
