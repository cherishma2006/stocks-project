import { Link }

from "react-router";

export default function Sidebar() {

  return (

    <div className="fixed left-0 top-0 h-screen w-72 bg-gradient-to-b from-gray-950 via-black to-gray-900 text-white p-8 shadow-2xl border-r border-gray-800 flex flex-col justify-between">

      {/* TOP SECTION */}

      <div>

        {/* LOGO */}

        <div className="mb-8">

          <h1 className="text-4xl font-extrabold tracking-wide text-blue-400">

            STOCKS

          </h1>

          <p className="text-gray-400 mt-2 text-sm">

            Smart Trading Dashboard

          </p>

        </div>

        {/* NAVIGATION */}

        <div className="flex flex-col gap-3 text-base">

          <Link

            to="/dashboard"

            className="hover:bg-blue-500 hover:text-white transition-all duration-300 px-5 py-3 rounded-2xl bg-gray-900"

          >

            📊 Dashboard

          </Link>

          <Link

            to="/stocks"

            className="hover:bg-green-500 hover:text-white transition-all duration-300 px-5 py-3 rounded-2xl bg-gray-900"

          >

            📈 Stocks

          </Link>

          <Link

            to="/portfolio"

            className="hover:bg-purple-500 hover:text-white transition-all duration-300 px-5 py-3 rounded-2xl bg-gray-900"

          >

            💼 Portfolio

          </Link>

          <Link

            to="/watchlist"

            className="hover:bg-yellow-500 hover:text-black transition-all duration-300 px-5 py-3 rounded-2xl bg-gray-900"

          >

            ⭐ Watchlist

          </Link>

          <Link

            to="/predictions"

            className="hover:bg-pink-500 hover:text-white transition-all duration-300 px-5 py-3 rounded-2xl bg-gray-900"

          >

            🤖 Predictions

          </Link>

          <Link

            to="/profile"

            className="hover:bg-cyan-500 hover:text-white transition-all duration-300 px-5 py-3 rounded-2xl bg-gray-900"

          >

            👤 Profile

          </Link>

          <Link

            to="/news"

            className="hover:bg-red-500 hover:text-white transition-all duration-300 px-5 py-3 rounded-2xl bg-gray-900"

          >

            📰 News

          </Link>

        </div>

      </div>

      {/* FOOTER */}

      <div className="text-gray-500 text-sm">

        Built with MERN Stack 🚀

      </div>

    </div>

  );

}