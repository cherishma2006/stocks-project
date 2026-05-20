import exp from "express";
import cors from "cors";
import { config } from "dotenv";
import { connect } from "mongoose";
import { authApp } from "./APIs/AuthAPI.js";
import { portfolioApp }from "./APIs/PortfolioAPI.js";
import { watchlistApp }from "./APIs/WatchlistAPI.js";

config();

const app = exp();

app.use(cors());

app.use(exp.json());
app.use(
  "/portfolio",
  portfolioApp
);

app.use("/auth", authApp);
app.use(
  "/watchlist",
  watchlistApp
);


const connectDB = async () => {

  try {

    await connect(process.env.DB_URL);

    console.log("DB connected");

    const port = process.env.PORT || 1971;

    app.listen(port, () => {

      console.log(`Server running on ${port}`);

    });

  }

  catch (err) {

    console.log(err);

  }

};

connectDB();