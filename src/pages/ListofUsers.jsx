import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser, showUser } from "../features/todoSlice";
import { useNavigate } from "react-router-dom";
import { Bars } from "react-loader-spinner";

function ListofUsers() {
  const { isLoading, isError, todo } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(showUser());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
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
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center min-h-screen text-red-600 text-lg">
        <p>{todo.isError}</p>
      </div>
    );
  }

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen mt-[80px]">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 flex items-center space-x-2">
        <span>User List</span>
      </h2>
      <button
        className="mb-4 px-4 py-2 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 transition duration-150"
        onClick={() => navigate("/adduser")}
      >
        Add User
      </button>
      <div className="overflow-x-auto w-full max-w-4xl">
        <table className="w-full bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Age</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {todo.map((userData) => (
              <tr
                key={userData.id}
                className="even:bg-gray-50 hover:bg-gray-100"
              >
                <td className="px-4 py-2 border-b border-gray-300">
                  {userData.id}
                </td>
                <td className="px-4 py-2 border-b border-gray-300">
                  {userData.name}
                </td>
                <td className="px-4 py-2 border-b border-gray-300">
                  {userData.email}
                </td>
                <td className="px-4 py-2 border-b border-gray-300">
                  {userData.age}
                </td>
                <td className="px-4 py-2 border-b border-gray-300 flex space-x-2">
                  <button
                    className="px-3 py-1 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 transition duration-150"
                    onClick={() => handleDelete(userData.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="px-3 py-1 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition duration-150"
                    onClick={() => navigate(`/listofusers/${userData.id}`)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListofUsers;
