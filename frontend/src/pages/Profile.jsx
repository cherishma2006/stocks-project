import Sidebar
from "../components/Sidebar";

import Navbar
from "../components/Navbar";

export default function Profile() {

  const user =

  JSON.parse(

    localStorage.getItem("user")

  );

  return (

    <>

      <Sidebar />

      <div className="min-h-screen bg-black text-white p-10 ml-64">

        <Navbar />

        <h1 className="text-5xl font-bold mb-10">

          My Profile

        </h1>

        <div className="bg-gray-900 p-10 rounded-2xl w-[500px]">

          <div className="mb-8">

            <h2 className="text-gray-400 text-lg">

              Username

            </h2>

            <p className="text-3xl font-bold mt-2">

              {user?.username}

            </p>

          </div>

          <div>

            <h2 className="text-gray-400 text-lg">

              Email

            </h2>

            <p className="text-3xl font-bold mt-2">

              {user?.email}

            </p>

          </div>

        </div>

      </div>

    </>

  );

}