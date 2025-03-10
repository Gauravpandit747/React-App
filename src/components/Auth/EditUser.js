import { useState } from "react";
import { BACKEND_END_POINT } from "../../config";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { editUsername } from "../../utils/store/userSclice";

const EditUser = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const userData = useSelector((store) => store?.user?.userData);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username !== "") {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization",`${userData.Token}`);
      const myRequest = new Request(`${BACKEND_END_POINT}/auth/edituser`, {
        method: "POST",
        body: JSON.stringify({ username: username, email: email }),
        headers: myHeaders,
      });

      const response = await fetch(myRequest);
      console.log(response.status);
      if (response.status == 200) {
        jsonData = await response.json();
        dispatch(editUsername({ username: jsonData?.data?.username, email:jsonData?.data?.email }));
        navigate("/");
        return jsonData;
      }
      if (response.status == 400) {
        console.log(":::::::::::::::::::::::::::::");
        alert("Please check your email");
      }
    }
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center m-5 p-6 mt-30 border border-gray-300 rounded-lg shadow-lg w-120 mx-auto">
        <span className="text-2xl font-bold my-4">Edit user</span>
        <form onSubmit={handleSubmit} className="w-full flex flex-col">
          <span className="text-l ml-3">Username</span>
          <input
            className="m-2 p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Username"
            id="username"
            type="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <span className="text-l ml-3">Email</span>
          <input
            className="m-2 p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Email"
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            className="m-2 p-3 bg-amber-500 text-white font-bold rounded-lg hover:bg-amber-600 transition duration-200"
            type="submit"
          >
            Edit
          </button>
        </form>
      </div>
    </>
  );
};

export default EditUser;
