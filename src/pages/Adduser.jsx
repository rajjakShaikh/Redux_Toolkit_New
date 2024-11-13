import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser, resetSuccess } from "../features/todoSlice";
import { useNavigate } from "react-router-dom";
import { Bars } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Ensure CSS is imported

export default function Adduser() {
  const [userData, setUserData] = useState({});
  const { isLoading, isError, todo, isSuccess } = useSelector(
    (state) => state.todo
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlechange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log("Checking isSuccess:", isSuccess);
    if (isSuccess) {
      toast.success("User added successfully!", {
        autoClose: 700,
        position: "bottom-center",
      });
      dispatch(resetSuccess());
    }
  }, [dispatch, isSuccess]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(userData));
    setUserData({});
    setTimeout(() => {
      navigate("/listofusers");
    }, 2000);
  };

  if (isLoading)
    return (
      <div>
        <Bars
          height="80"
          width="80"
          color="#FF0000"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );

  if (isError)
    return (
      <div className="text-center mt-4 text-red-600">Error: {todo.error}</div>
    );

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <ToastContainer /> {/* ToastContainer needs to be present */}
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Add User
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Name:
            </label>
            <input
              type="text"
              name="name"
              value={userData.name || ""}
              onChange={handlechange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={userData.email || ""}
              onChange={handlechange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Age:
            </label>
            <input
              type="number"
              name="age"
              value={userData.age || ""}
              onChange={handlechange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your age"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md font-semibold transition duration-200 ease-in-out"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
