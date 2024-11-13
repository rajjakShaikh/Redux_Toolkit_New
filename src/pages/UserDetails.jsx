import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { showUser, updateUser } from "../features/todoSlice";
import { Bars } from "react-loader-spinner";

function UserDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, todo } = useSelector((state) => state.todo);
  const [formData, setFormData] = useState({ name: "", email: "", age: "" });
  const [editing, setEditing] = useState(false);

  const user = todo.find((userData) => userData.id === id);

  useEffect(() => {
    dispatch(showUser());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      setFormData({ name: user.name, email: user.email, age: user.age });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

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

  const toggleEdit = () => {
    if (editing) {
      dispatch(updateUser({ ...formData, id }));
    }
    setEditing(!editing);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-4">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-md p-6">
        <div className="space-y-4">
          <div>
            <label className="block font-medium text-gray-700">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              disabled={!editing}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              disabled={!editing}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Age:</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              disabled={!editing}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="mt-6 flex justify-between items-center">
          <button
            className="px-3 py-2 bg-gray-500 text-white font-medium rounded-md"
            onClick={() => navigate("/listofusers")}
          >
            Back
          </button>

          <div className="flex space-x-4">
            <button
              className="px-3 py-2 bg-blue-500 text-white font-medium rounded-md"
              onClick={toggleEdit}
            >
              {editing ? "Save" : "Edit"}
            </button>

            {editing && (
              <button
                className="px-3 py-2 bg-red-500 text-white font-medium rounded-md"
                onClick={() => setEditing(false)}
              >
                Cancel
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
