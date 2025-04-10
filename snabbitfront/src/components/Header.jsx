import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping,faCircleUser } from '@fortawesome/free-solid-svg-icons';
import "./Header.css";
function Header({useremail,setIsLogin}){
    const handleLogin=()=>
    {
        setTimeout(()=>setIsLogin(false),500);
    }
    return (
        <>
        <section>
            <div className="header mt-4 ms-5 d-flex mb-4 align-items-center rounded-5 shadow-lg pt-4 pb-2 me-5">
                <ul className="d-flex justify-content-center list-unstyled col-6 align-items-center space-between">
                    <li className="col-2 header_list"><img src="/source_img/favicon.png" className="w-50 h-50"/></li>
                    <li className="col-2 header_list fs-4" onClick={() => {window.location.href = "http://localhost:5173/"}}>Home</li>
                    <li className="col-2 header_list fs-4" onClick={() => {window.location.href = "http://localhost:5173/Service"}}>Service</li>
                    <li className="col-2 header_list fs-4" onClick={() => {window.location.href = "http://localhost:5173/Aboutus"}}>About us</li>
                    <li className="col-2 header_list fs-4" onClick={() => {window.location.href = "http://localhost:5173/Contactus"}}>Contact us</li>
                </ul>
                <ul className="d-flex justify-content-end list-unstyled col-6 align-items-center space-between pe-5 gap-5">
                    <li className="col-1 header_list fs-4" onClick={() => {window.location.href = "http://localhost:5173/Cart"}}><FontAwesomeIcon icon={faCartShopping} /></li>
                    <li className="col-4 header_list fs-4 d-flex align-items-center" onClick={()=>{window.location.href="http://localhost:5173/Profile"}}><FontAwesomeIcon icon={faCircleUser} className="me-1 fs-4"/><p className="p-0 m-0">{useremail}</p></li>
                    <li className="col-1"><label className="switch me-5" onClick={handleLogin}>
                  <input type="checkbox"/>
                  <span className="slider round"/>
                    </label></li>
                </ul>
            </div>
        </section>
        </>
    )
}
export default Header;