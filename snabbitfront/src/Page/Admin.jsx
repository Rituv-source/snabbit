import React from "react";
import Aservice from "./Aservice";
import Aorder from "./Aorder";

function Admin() {
  return (
    <>
    <div className="admin_title fs-1 ms-3">Admin View</div>
    <div className="admin_service">
    <Aservice/>
    </div>
    <div className="admin_order">
    <Aorder />
    </div>
    </>
  );
}


export default Admin;