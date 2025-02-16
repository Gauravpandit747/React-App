import React, { useState, useContext } from "react";
// import { login } from '../../Api/auth';
// import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from "react-router";

const LoginForm = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  //   const { login: handleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login(credentials);
      handleLogin(data.token, data.data);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <span>Login</span>
          <input className="m-2 p-2 border-2"
          placeholder="email"
            id="email"
            type="email"
            required
            value={credentials.email}
            onChange={(e) =>
              setCredentials({ ...credentials, email: e.target.value })
            }
          ></input>

          <input
          className="m-2 p-2 border-2"
            id="password"
            placeholder="pasword"
            type="password"
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
            fullWidth
            required
          ></input>
          <button className="m-2 p-2 border-2 bg-amber-200" variant="contained" type="submit" fullWidth>
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
