import React, { use, useEffect, useState } from "react";
import axios from "axios";
function Aorder() {
  const [bookings, setBookings] = useState([]);
  const [status,setStatus]=useState("");
  useEffect(() => {
    fetchBookings();
  }, []);
  useEffect(() => {handlechange();},[]);
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
  const handlechange=async(bookingid,newstatus)=>
  {
      try{
        await axios.put(`http://localhost:8080/snabbitbackend/api/admin/booking/${bookingid}`,{status:newstatus});
        fetchBookings();
      }catch(error)
      {
        console.error('Error deleting cart item:', error);
      }
  }
  return (
    <>
      <div className="order_title fs-1 ms-4 mb-3">Order View</div>
        <div className="order_list row">
          {bookings.map((item) => (
            <div className="Acard ms-5 mb-3 border border-1 w-25 col-3 rounded-3 p-3 justify-items-center text-center" key={item.uniqueid}>
              <div className="Acard-body">
                <p className="Acard-id">#{item.uniqueid}</p>
                <p className="Acard-useremail">{item.useremail}</p>
                <h5 className="Acard-title">{item.name}</h5>
                <p className="Acard-price">₹{item.price}</p>
                <select id="status" value={item.status} onChange={(e) => handlechange(item.bookingid, e.target.value)}>
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