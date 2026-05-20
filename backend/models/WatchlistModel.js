import {
  Schema,
  model
} from "mongoose";

const watchlistSchema =
new Schema({

  userEmail: String,

  symbol: String,

});

export const WatchlistModel =
model(

  "watchlist",

  watchlistSchema

);