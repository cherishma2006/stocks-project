import { useEffect, useState }from "react";
import Sidebar
from "../components/Sidebar";
import Navbar
from "../components/Navbar";
export default function Dashboard() {

  const [portfolio, setPortfolio] =

  useState([]);

  const [watchlist, setWatchlist] =

  useState([]);

  // FETCH DATA

  useEffect(() => {

    const fetchData =

    async () => {

      try {

        const user =

        JSON.parse(

          localStorage.getItem("user")

        );

        // PORTFOLIO

        const portfolioResponse =

        await fetch(

          `http://localhost:1971/portfolio/${user.email}`

        );

        const portfolioData =

        await portfolioResponse.json();

        setPortfolio(
          portfolioData.payload
        );

        // WATCHLIST

        const watchlistResponse =

        await fetch(

          `http://localhost:1971/watchlist/${user.email}`

        );

        const watchlistData =

        await watchlistResponse.json();

        setWatchlist(
          watchlistData.payload
        );

      }

      catch (err) {

        console.log(err);

      }

    };

    fetchData();

  }, []);

  // TOTAL VALUE

  const totalInvestment =

  portfolio.reduce(

    (total, stock) =>

      total +

      (stock.buyPrice *
       stock.quantity),

    0

  );

  return (
     <>
    <Sidebar />

   <div className="min-h-screen bg-black text-white p-10 ml-64">
    <Navbar />
      <h1 className="text-5xl font-bold mb-12">

        Dashboard

      </h1>

      <div className="grid grid-cols-3 gap-8">

        {/* TOTAL STOCKS */}

        <div className="bg-gray-900 p-8 rounded-2xl">

          <h2 className="text-2xl text-gray-400">

            Total Stocks

          </h2>

          <p className="text-5xl font-bold mt-6 text-green-400">

            {portfolio.length}

          </p>

        </div>

        {/* INVESTMENT */}

        <div className="bg-gray-900 p-8 rounded-2xl">

          <h2 className="text-2xl text-gray-400">

            Total Investment

          </h2>

          <p className="text-5xl font-bold mt-6 text-blue-400">

            ${totalInvestment.toFixed(2)}

          </p>

        </div>

        {/* WATCHLIST */}

        <div className="bg-gray-900 p-8 rounded-2xl">

          <h2 className="text-2xl text-gray-400">

            Watchlist

          </h2>

          <p className="text-5xl font-bold mt-6 text-yellow-400">

            {watchlist.length}

          </p>

        </div>

      </div>

    </div>
    </>

  );

}