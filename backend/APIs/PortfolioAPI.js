import exp from "express";

import { PortfolioModel }
from "../models/PortfolioModel.js";

export const portfolioApp =
exp.Router();

// BUY STOCK

portfolioApp.post(
  "/buy",

  async (req, res) => {

    try {

      const stock =
      req.body;

      const newStock =
      new PortfolioModel(stock);

      await newStock.save();

      res.status(201).json({

        message:
        "Stock Added",

      });

    }

    catch (err) {

      console.log(err);

      res.status(500).json({

        message:
        "Error adding stock",

      });

    }

  }

);

// GET USER PORTFOLIO

portfolioApp.get(
  "/:email",

  async (req, res) => {

    try {

      const stocks =
      await PortfolioModel.find({

        userEmail:
        req.params.email,

      });

      res.status(200).json({

        payload: stocks,

      });

    }

    catch (err) {

      res.status(500).json({

        message:
        "Error fetching portfolio",

      });

    }

  }

);
// SELL STOCK

portfolioApp.delete(

  "/:id",

  async (req, res) => {

    try {

      await PortfolioModel.findByIdAndDelete(

        req.params.id

      );

      res.status(200).json({

        message:
        "Stock Sold",

      });

    }

    catch (err) {

      res.status(500).json({

        message:
        "Error selling stock",

      });

    }

  }

);