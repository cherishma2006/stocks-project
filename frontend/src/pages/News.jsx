import Sidebar
from "../components/Sidebar";
import Navbar

from "../components/Navbar";
export default function News() {

  const news = [

    {

      title:
      "Apple Stock Hits New High",

      source:
      "Bloomberg",

      description:
      "Apple shares surged after strong quarterly earnings.",

    },

    {

      title:
      "Tesla Expands AI Division",

      source:
      "CNBC",

      description:
      "Tesla plans to invest heavily in AI technologies.",

    },

    {

      title:
      "NVIDIA Dominates AI Market",

      source:
      "Reuters",

      description:
      "NVIDIA continues massive growth due to AI chip demand.",

    },

    {

      title:
      "Amazon Cloud Revenue Increases",

      source:
      "Forbes",

      description:
      "AWS growth boosts Amazon market performance.",

    },

  ];

  return (

<>

    <Sidebar />

    <div className="min-h-screen bg-black text-white p-10 ml-64">
      <Navbar />
      <h1 className="text-5xl font-bold mb-12">

        Financial News

      </h1>

      <div className="grid grid-cols-2 gap-8">

        {

          news.map((item, index) => (

            <div

              key={index}

              className="bg-gray-900 p-8 rounded-2xl"

            >

              <h2 className="text-3xl font-bold">

                {item.title}

              </h2>

              <p className="text-yellow-400 mt-4 text-xl">

                {item.source}

              </p>

              <p className="text-gray-300 mt-6 text-lg">

                {item.description}

              </p>

            </div>

          ))

        }

      </div>

    </div>
</>
  );

}