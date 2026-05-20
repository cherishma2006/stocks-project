import {
  Schema,
  model
} from "mongoose";

const portfolioSchema =
new Schema({

  userEmail: String,

  stockName: String,

  symbol: String,

  quantity: Number,

  buyPrice: Number,

});

export const PortfolioModel =
model(
  "portfolio",
  portfolioSchema
);