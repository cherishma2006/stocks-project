import { useNavigate } from "react-router";
import { useState } from "react";

export default function Register() {
  
  const navigate = useNavigate();

  const [formData, setFormData] =
  useState({

    username: "",
    email: "",
    password: "",

  });

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
      e.target.value,

    });

  };

  const handleRegister =
  async (e) => {

    e.preventDefault();

    try {

      const response =
      await fetch(

        "http://localhost:1971/auth/register",

        {

          method: "POST",

          headers: {
            "Content-Type":
            "application/json",
          },

          body:
          JSON.stringify(formData),

        }

      );

      const data =
      await response.json();

      alert(data.message);

navigate("/login");

    }

    catch (error) {

      alert("Server Error");

    }

  };

  return (

    <div className="min-h-screen bg-black text-white flex justify-center items-center">

      <form
        onSubmit={handleRegister}
        className="bg-gray-900 p-10 rounded-2xl w-96"
      >

        <h1 className="text-4xl font-bold mb-8">
          Register
        </h1>

        <input
          type="text"
          name="username"
          placeholder="Username"
          className="w-full p-3 mb-4 rounded bg-gray-800"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded bg-gray-800"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-3 mb-6 rounded bg-gray-800"
          onChange={handleChange}
        />

        <button
          type="submit"
          className="w-full bg-blue-500 p-3 rounded-xl"
        >
          Register
        </button>

      </form>

    </div>

  );

}