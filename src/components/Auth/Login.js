import React, { useState, useContext, useEffect, use } from "react";
import { useNavigate } from "react-router";
import { BACKEND_END_POINT } from "../../config";
import { addUser } from "../../utils/store/userSclice";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login(credentials);
      handleLogin(data.token, data.data);
    } catch (err) {
      setError(err.response?.data?.error || "Login failed");
    }
  };

  const login = async (credentials) => {
    const { email, password } = credentials;
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const myRequest = new Request(`${BACKEND_END_POINT}/auth/login`, {
      method: "POST",
      body: JSON.stringify({ email: email, password: password }),
      headers: myHeaders,
    });

    const response = await fetch(myRequest);
    if (response) {
      jsonData = await response.json();
      jsonData.isLoggedIn = true;
      const user = {
        email: jsonData.user.email,
        username: jsonData.user.username,
      };
      dispatch(addUser(jsonData));
      navigate("/");
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center m-5 p-6 mt-30 border border-gray-300 rounded-lg shadow-lg w-120 mx-auto">
        <span className="text-2xl font-bold my-4">Login</span>
        <form onSubmit={handleSubmit} className="w-full flex flex-col">
          <span className="text-l ml-3">Email</span>
          <input
            className="m-2 p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Email"
            id="email"
            type="email"
            required
            value={credentials.email}
            onChange={(e) =>
              setCredentials({ ...credentials, email: e.target.value })
            }
          />
          <span className="text-l ml-3">Password</span>
          <input
            className="m-2 p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="password"
            placeholder="Enter Password"
            type="password"
            required
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
          />

          <button
            className="m-2 p-3 bg-amber-500 text-white font-bold rounded-lg hover:bg-amber-600 transition duration-200"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
