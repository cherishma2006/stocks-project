import { useNavigate }

from "react-router";

export default function Navbar() {

  const navigate =
  useNavigate();

  const user =

  JSON.parse(

    localStorage.getItem("user")

  );

  // LOGOUT

  const logout = () => {

    localStorage.clear();

    navigate("/");

  };

  return (

    <div className="bg-gray-900 text-white p-6 rounded-2xl flex justify-between items-center mb-10">

      <div>

        <h1 className="text-3xl font-bold">

          Welcome,
          {user?.username}

        </h1>

      </div>

      <button

        onClick={logout}

        className="bg-red-500 px-6 py-3 rounded-xl"

      >

        Logout

      </button>

    </div>

  );

}