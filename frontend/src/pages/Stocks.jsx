import { useEffect, useState } from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

import { getStockData } from "../API/StockAPI";

import Sidebar
from "../components/Sidebar";

import Navbar
from "../components/Navbar";

export default function Stocks() {

  const [stock, setStock] =
  useState(null);

  const [symbol, setSymbol] =
  useState("AAPL");

  // BUY STOCK

  const buyStock = async () => {

    try {

      if (

        !stock ||

        !stock["05. price"]

      ) {

        alert(

          "Stock price unavailable"

        );

        return;

      }

      const user = JSON.parse(

        localStorage.getItem("user")

      );

      const stockData = {

        userEmail: user.email,

        stockName: symbol,

        symbol: symbol,

        quantity: 1,

        buyPrice: Number(

          stock["05. price"]

        ),

      };

      const response = await fetch(

`${import.meta.env.VITE_API_URL}/portfolio/buy`,
        {

          method: "POST",

          headers: {

            "Content-Type":

            "application/json",

          },

          body: JSON.stringify(

            stockData

          ),

        }

      );

      const data =

      await response.json();

      alert(data.message);

    }

    catch (error) {

      console.log(error);

      alert(

        "Error buying stock"

      );

    }

  };

  // FETCH STOCK DATA

  useEffect(() => {

    async function fetchData() {

      try {

        const data =

        await getStockData(symbol);

        setStock(data);

      }

      catch (err) {

        console.log(err);

      }

    }

    fetchData();

  }, [symbol]);

  // CHART DATA

  const chartData = [

    { day: "Mon", price: 120 },

    { day: "Tue", price: 140 },

    { day: "Wed", price: 135 },

    { day: "Thu", price: 160 },

    { day: "Fri", price: 180 },

  ];

  // WATCHLIST

  const addToWatchlist =

  async () => {

    try {

      const user =

      JSON.parse(

        localStorage.getItem("user")

      );

      const response =

      await fetch(

`${import.meta.env.VITE_API_URL}/watchlist/add`,
        {

          method: "POST",

          headers: {

            "Content-Type":
            "application/json",

          },

          body: JSON.stringify({

            userEmail:
            user.email,

            symbol,

          }),

        }

      );

      const data =

      await response.json();

      alert(data.message);

    }

    catch (err) {

      console.log(err);

    }

  };

  return (

    <>

      <Sidebar />

      <div className="min-h-screen bg-black text-white p-10 ml-72">

        <Navbar />

        <h1 className="text-5xl font-bold mb-10">

          Live Stocks Market

        </h1>

        {/* SEARCH BAR */}

        <div className="mb-10 flex gap-4">

          <input

            type="text"

            placeholder="Enter Stock Symbol"

            value={symbol}

            onChange={(e) =>

              setSymbol(
                e.target.value.toUpperCase()
              )

            }

            className="bg-gray-900 text-white p-4 rounded-xl w-80"

          />

        </div>

        {/* STOCK CARD */}

        <div className="bg-gray-900 p-8 rounded-2xl mb-16 w-96">

          <h2 className="text-3xl font-bold">

            {symbol}

          </h2>

          <p className="text-xl text-gray-400 mt-2">

            Live Stock Price

          </p>

          <p className="text-5xl text-green-400 mt-6">

            {

              stock &&

              stock["05. price"]

              ? `$${stock["05. price"]}`

              : "No Data Found"

            }

          </p>

          <button

            onClick={buyStock}

            className="mt-6 bg-green-500 px-6 py-3 rounded-xl cursor-pointer"

          >

            Buy Stock

          </button>

          <button

            onClick={addToWatchlist}

            className="mt-4 ml-4 bg-yellow-500 px-6 py-3 rounded-xl text-black"

          >

            Add Watchlist

          </button>

        </div>

        {/* CHART */}

        <div className="bg-gray-900 p-10 rounded-2xl">

          <h2 className="text-3xl font-bold mb-8">

            Weekly Trend

          </h2>

          <ResponsiveContainer
            width="100%"
            height={400}
          >

            <LineChart data={chartData}>

              <XAxis dataKey="day" />

              <YAxis />

              <Tooltip />

              <Line

                type="monotone"

                dataKey="price"

                stroke="#3b82f6"

                strokeWidth={4}

              />

            </LineChart>

          </ResponsiveContainer>

        </div>

      </div>

    </>

  );

}