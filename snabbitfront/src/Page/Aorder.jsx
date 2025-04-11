import React, { useState } from "react";
import axios from "axios";
function Aorder() {
    const [bookings, setBookings] = useState([]);
    const [status, setStatus] = useState('');
    const fetchBookings = async () => {
        try{
            const response = await axios.get('http://localhost:8080/snabbitbackend/api/admin/booking', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            setBookings(response.data);
            console.log(response.data);
        }catch(error){
            console.error('Error fetching bookings:', error);
        }
    }
  return (
    <>
    <div className="order_title fs-1 ms-4">Order View</div>
      <div className="order_list">
      {bookings.map((item)=>(
                    <div className="card ms-2 mb-3" key={item.id}>
                        <div className="card-body">
                            <p className="card-id">#{item.uniqueid}</p>
                            <p className="card-useremail">{item.useremail}</p>
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-price">₹{item.price}</p>
                            <div class="dropdown">
                              <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" value={item.status} onChange={(e) => setStatus(e.target.value)}>
                                {item.status}
                              </button>
                              <ul class="dropdown-menu">
                                <li><button class="dropdown-item" type="button">Confirmed</button></li>
                                <li><button class="dropdown-item" type="button">Deliverd</button></li>
                              </ul>
                            </div>
                        </div>
                    </div>))}
      </div>
    </>
  );
}
export default Aorder;