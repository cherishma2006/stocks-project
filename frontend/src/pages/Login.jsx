import { useState } from "react";

import { useNavigate }
from "react-router";

export default function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] =
  useState({

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

  const handleLogin =
  async (e) => {

    e.preventDefault();

    try {

      const response =
      await fetch(

        "http://localhost:1971/auth/login",

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

      if (response.ok) {

        localStorage.setItem(
          "token",
          data.token
        );

        localStorage.setItem(
          "user",
          JSON.stringify(data.user)
        );

        alert("Login Success");

        navigate("/dashboard");

      }

      else {

        alert(data.message);

      }

    }

    catch (error) {

      alert("Server Error");

    }

  };

  return (

    <div className="min-h-screen bg-black text-white flex justify-center items-center">

      <form
        onSubmit={handleLogin}
        className="bg-gray-900 p-10 rounded-2xl w-96"
      >

        <h1 className="text-4xl font-bold mb-8">
          Login
        </h1>

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
          className="w-full bg-green-500 p-3 rounded-xl"
        >
          Login
        </button>

      </form>

    </div>

  );

}