import { Link } from "react-router";

export default function Home() {

  return (

    <div className="min-h-screen bg-black text-white overflow-hidden">

      {/* HEADER */}

      <header className="flex justify-between items-center px-16 py-8 border-b border-gray-800">

        {/* LOGO */}

        <h1 className="text-4xl font-extrabold text-blue-400 tracking-wide">

          STOCKS

        </h1>

        {/* NAVBAR */}

        <div className="flex gap-6">

          <Link

            to="/login"

            className="px-6 py-3 rounded-xl bg-gray-900 hover:bg-blue-500 transition-all duration-300"

          >

            Login

          </Link>

          <Link

            to="/register"

            className="px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 transition-all duration-300"

          >

            Register

          </Link>

        </div>

      </header>

      {/* HERO SECTION */}

      <div className="flex flex-col justify-center items-center text-center px-10 h-[80vh]">

        <p className="text-blue-400 text-lg tracking-[5px] uppercase mb-6">

          AI Powered Trading Platform

        </p>

        <h1 className="text-5xl font-extrabold leading-tight max-w-4xl">

          Smart Stock Trading <br />

          Made Simple

        </h1>

        <p className="text-gray-400 text-lg mt-8 max-w-2xl leading-relaxed">

          Monitor live stock prices, manage portfolios,

          create watchlists, and explore AI-powered

          market insights in one modern dashboard.

        </p>

      </div>

    </div>

  );

}