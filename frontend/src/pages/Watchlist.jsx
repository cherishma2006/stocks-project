import { useEffect, useState }

from "react";
import Sidebar
from "../components/Sidebar";
import Navbar

from "../components/Navbar";
export default function Watchlist() {

  const [watchlist, setWatchlist] =

  useState([]);

  useEffect(() => {

    const fetchWatchlist =

    async () => {

      try {

        const user =

        JSON.parse(

          localStorage.getItem("user")

        );

        const response =

        await fetch(

fetch(`${import.meta.env.VITE_API_URL}/watchlist/${user.email}`),
        );

        const data =

        await response.json();

        setWatchlist(
          data.payload
        );

      }

      catch (err) {

        console.log(err);

      }

    };

    fetchWatchlist();

  }, []);

  return (

<>

    <Sidebar />

    <div className="min-h-screen bg-black text-white p-10 ml-64">
      <Navbar />
      <h1 className="text-5xl font-bold mb-10">

        My Watchlist

      </h1>

      <div className="grid grid-cols-3 gap-8">

        {

          watchlist.map((item) => (

            <div

              key={item._id}

              className="bg-gray-900 p-8 rounded-2xl"

            >

              <h2 className="text-4xl font-bold">

                {item.symbol}

              </h2>

            </div>

          ))

        }

      </div>

    </div>
   </>
  );

}