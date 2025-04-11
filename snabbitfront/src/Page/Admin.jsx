import React from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Aservice from "./Aservice";
import Aorder from "./Aorder";

function Admin() {
  return (
    <>
    <div className="admin_title fs-1 ms-3">Admin View</div>
    <div>
    <Aservice/>
    </div>
    <div>
    <Aorder/>
    </div>
    </>
  );
}


export default Admin;