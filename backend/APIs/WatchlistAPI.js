import exp from "express";

import {

  WatchlistModel

} from "../models/WatchlistModel.js";

export const watchlistApp =
exp.Router();

// ADD TO WATCHLIST

watchlistApp.post(

  "/add",

  async (req, res) => {

    try {

      const item =
      req.body;

      const exists =

      await WatchlistModel.findOne({

        userEmail:
        item.userEmail,

        symbol:
        item.symbol,

      });

      if (exists) {

        return res.status(400).json({

          message:
          "Already Added",

        });

      }

      const newItem =

      new WatchlistModel(item);

      await newItem.save();

      res.status(201).json({

        message:
        "Added To Watchlist",

      });

    }

    catch (err) {

      res.status(500).json({

        message:
        "Error",

      });

    }

  }

);

// GET WATCHLIST

watchlistApp.get(

  "/:email",

  async (req, res) => {

    try {

      const items =

      await WatchlistModel.find({

        userEmail:
        req.params.email,

      });

      res.status(200).json({

        payload: items,

      });

    }

    catch (err) {

      res.status(500).json({

        message:
        "Error",

      });

    }

  }

);