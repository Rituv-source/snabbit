import React, { useEffect, useState } from "react";
import axios from "axios";
function Aorder() {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetchBookings();
  }, []);
  const fetchBookings = async () => {
    try {
      const response = await axios.get('http://localhost:8080/snabbitbackend/api/admin/booking', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      setBookings(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  }
  
  return (
    <>
      <div className="order_title fs-1 ms-4 mb-3">Order View</div>
      <div className="order_list row">
        {bookings.map((item) => (
          <div className="Acard ms-5 mb-3 border border-1 w-25 col-3 rounded-3 p-3 justify-items-center text-center" key={item.id}>
            <div className="Acard-body">
              <p className="Acard-id">#{item.uniqueid}</p>
              <p className="Acard-useremail">{item.useremail}</p>
              <h5 className="Acard-title">{item.name}</h5>
              <p className="Acard-price">₹{item.price}</p>
              <select
                id="status"
                value={item.status}>
                <option value="Received">Received</option>
                <option value="Confirmed">Confirmed</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Aorder;