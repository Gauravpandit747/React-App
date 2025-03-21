import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { BACKEND_END_POINT } from "../../config";

const Register = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    confirmpassword: "",
  });

  useEffect(() => {}, [credentials.confirmpassword, credentials.password]);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await register(credentials);
      handleLogin(data.token, data.data);
    } catch (err) {
      setError(err.response?.data?.error || "Login failed");
    }
  };

  const register = async (credentials) => {
    const { email, password, firstname, lastname } = credentials;
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const myRequest = new Request(`${BACKEND_END_POINT}/auth/register`, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
        firstname: firstname,
        lastname: lastname,
      }),
      headers: myHeaders,
    });

    const response = await fetch(myRequest);
    if ((response.status = 200)) {
      jsonData = await response.json();
      navigate("/login");
    } else {
     return  <div class="p-4 mb-4 text-red-800 bg-red-100 border border-red-300 rounded-lg" role="alert">
     ❌ Error! Something went wrong. Try again.
   </div>
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center m-5 p-6 mt-30 border border-gray-300 rounded-lg shadow-lg w-120 mx-auto">
        <span className="text-2xl font-bold my-4">Login</span>
        <form onSubmit={handleSubmit} className="w-full flex flex-col">
          <span className="text-l ml-3">First Name</span>
          <input
            className="m-2 p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter First Name"
            id="firstname"
            type="firstname"
            required
            value={credentials.firstname}
            onChange={(e) =>
              setCredentials({ ...credentials, firstname: e.target.value })
            }
          />

          <span className="text-l ml-3">Last Name</span>
          <input
            className="m-2 p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Last Name"
            id="lastname"
            type="lastname"
            required
            value={credentials.lastname}
            onChange={(e) =>
              setCredentials({ ...credentials, lastname: e.target.value })
            }
          />

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

          <span className="text-l ml-3">Confirm Password</span>
          <input
            className="m-2 p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="password"
            placeholder="Confirm Password"
            type="password"
            required
            value={credentials.confirmpassword}
            onChange={(e) =>
              setCredentials({
                ...credentials,
                confirmpassword: e.target.value,
              })
            }
          />
          {credentials.confirmpassword !== credentials.password && (
            <span className="text-l ml-3">
              Confirm Password and Password do not match.
            </span>
          )}
          <button
            className="m-2 p-3 bg-amber-500 text-white font-bold rounded-lg hover:bg-amber-600 transition duration-200"
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
