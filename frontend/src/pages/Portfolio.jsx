import { useEffect, useState } from "react";

import Sidebar
from "../components/Sidebar";

import Navbar
from "../components/Navbar";

export default function Portfolio() {

  const [stocks, setStocks] =
  useState([]);

  // TOTAL PORTFOLIO VALUE

  const totalValue =

  stocks.reduce(

    (total, stock) =>

      total +

      (stock.buyPrice *
       stock.quantity),

    0

  );

  // FETCH PORTFOLIO

  useEffect(() => {

    const fetchPortfolio =
    async () => {

      try {

        const user =

        JSON.parse(

          localStorage.getItem("user")

        );

        const response =

        await fetch(
`${import.meta.env.VITE_API_URL}/portfolio/${user.email}`,
        );

        const data =

        await response.json();

        setStocks(
          data.payload
        );

      }

      catch (err) {

        console.log(err);

      }

    };

    fetchPortfolio();

  }, []);

  // SELL STOCK

  const sellStock =

  async (id) => {

    try {

      const response =

      await fetch(

`${import.meta.env.VITE_API_URL}/portfolio/${id}`,
        {

          method: "DELETE",

        }

      );

      const data =

      await response.json();

      alert(data.message);

      setStocks(

        stocks.filter(

          (stock) =>

          stock._id !== id

        )

      );

    }

    catch (err) {

      console.log(err);

    }

  };

  return (

    <>

      <Sidebar />

      <div className="min-h-screen bg-black text-white p-10 ml-64">

        <Navbar />

        <h1 className="text-5xl font-bold mb-10">

          My Portfolio

        </h1>

        {/* TOTAL VALUE CARD */}

        <div className="bg-green-500 text-black p-6 rounded-2xl mb-10 w-96">

          <h2 className="text-2xl font-bold">

            Total Portfolio Value

          </h2>

          <p className="text-4xl mt-4 font-bold">

            ${totalValue.toFixed(2)}

          </p>

        </div>

        {/* STOCK CARDS */}

        <div className="grid grid-cols-3 gap-8">

          {

            stocks.map((stock) => {

              // SIMULATED CURRENT PRICE

              const currentPrice =

              stock.buyPrice + 20;

              // PROFIT / LOSS

              const profit =

              (currentPrice -
               stock.buyPrice)

               * stock.quantity;

              return (

                <div

                  key={stock._id}

                  className="bg-gray-900 p-6 rounded-2xl"

                >

                  <h2 className="text-3xl font-bold">

                    {stock.stockName}

                  </h2>

                  <p className="text-gray-400 mt-2">

                    {stock.symbol}

                  </p>

                  <p className="text-green-400 text-4xl mt-6">

                    Buy:
                    ${stock.buyPrice}

                  </p>

                  <p className="text-blue-400 mt-4 text-2xl">

                    Current:
                    ${currentPrice}

                  </p>

                  <p

                    className={`mt-4 text-2xl font-bold

                    ${profit >= 0

                      ? "text-green-400"

                      : "text-red-400"

                    }`}

                  >

                    Profit/Loss:

                    ${profit}

                  </p>

                  <p className="mt-4">

                    Quantity:
                    {stock.quantity}

                  </p>

                  <button

                    onClick={() =>
                      sellStock(stock._id)
                    }

                    className="mt-6 bg-red-500 px-6 py-2 rounded-xl"

                  >

                    Sell Stock

                  </button>

                </div>

              );

            })

          }

        </div>

      </div>

    </>

  );

}