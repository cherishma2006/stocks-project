import Sidebar
from "../components/Sidebar";
import Navbar

from "../components/Navbar";
export default function Predictions() {
  const predictions = [

    {

      symbol: "AAPL",

      prediction: "BUY",

      confidence: "92%",

    },

    {

      symbol: "TSLA",

      prediction: "HOLD",

      confidence: "81%",

    },

    {

      symbol: "NVDA",

      prediction: "BUY",

      confidence: "96%",

    },

    {

      symbol: "META",

      prediction: "SELL",

      confidence: "72%",

    },

  ];

  return (

<>

    <Sidebar />

    <div className="min-h-screen bg-black text-white p-10 ml-64">
      <Navbar />
      <h1 className="text-5xl font-bold mb-12">

        AI Stock Predictions

      </h1>

      <div className="grid grid-cols-2 gap-8">

        {

          predictions.map((stock) => (

            <div

              key={stock.symbol}

              className="bg-gray-900 p-8 rounded-2xl"

            >

              <h2 className="text-4xl font-bold">

                {stock.symbol}

              </h2>

              <p className="text-2xl mt-6">

                Prediction:

                <span

                  className={`ml-4 font-bold

                  ${stock.prediction === "BUY"

                    ? "text-green-400"

                    : stock.prediction === "SELL"

                    ? "text-red-400"

                    : "text-yellow-400"

                  }`}

                >

                  {stock.prediction}

                </span>

              </p>

              <p className="text-2xl mt-4 text-blue-400">

                Confidence:

                {stock.confidence}

              </p>

            </div>

          ))

        }

      </div>

    </div>
</>
  );

}