import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showUser } from "../features/todoSlice";

function Header() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const { isError, todo } = useSelector((state) => state.todo);

  useEffect(() => {
    dispatch(showUser());
  }, [dispatch]);

  if (isError) {
    return (
      <div className="flex justify-center items-center min-h-screen text-red-600 text-lg">
        <p>{todo.isError}</p>
      </div>
    );
  }

  return (
    <header className="fixed top-0 w-full bg-white text-black p-4 md:flex md:justify-between md:items-center shadow-md">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Redux Toolkit</h1>
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      <nav
        className={`fixed inset-y-0 left-0 bg-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 transition-transform duration-300 ease-in-out md:flex md:items-center`}
      >
        <ul className="flex flex-col md:flex-row gap-4 p-4">
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li className="flex items-center space-x-2">
            <Link to="/listofusers" className="hover:underline">
              UserList
            </Link>
            <span className="flex items-center justify-center w-6 h-6 bg-blue-500 text-white font-semibold rounded-full text-sm">
              {todo.length}
            </span>
          </li>
          <li>
            <Link to="/adduser" className="hover:underline">
              Add User
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
