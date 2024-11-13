// import UserData from "./pages/userData";
// import UserTable from "./pages/userTable";
import React from "react";
import Adduser from "./pages/Adduser";
import ListofUsers from "./pages/ListofUsers";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import UserDetails from "./pages/userDetails";
import Layout from "./pages/Layout";

export default function App() {
  return (
    <div>
      <BrowserRouter future={{ v7_startTransition: true }}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route exact path="/" element={<Home />} />
            <Route path="/adduser" element={<Adduser />} />
            <Route path="/listofusers" element={<ListofUsers />} />
            <Route path="/listofusers/:id" element={<UserDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
