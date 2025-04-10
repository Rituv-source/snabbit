import React,{useState,useEffect} from "react";
import axios from "axios";
import Adminform from "../components/Adminform";
function Admin()
{
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetchServices();
    }, []);

    const fetchServices = async () => {
        try {
            const response = await axios.get('http://localhost:8080/snabbitbackend/api/admin/service', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            setServices(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching services:', error);
        }
    };
    const handleoffline = async (uniqueid) => {
        try {
                await axios.delete(`http://localhost:8080/snabbitbackend/api/admin/service/${uniqueid}`);
        } catch (error) {
            console.error('Error deleting cart item:', error);
        }
    };
    const handleonline = async (uniqueid) => {
        try {
                await axios.delete(`http://localhost:8080/snabbitbackend/api/admin/service/${uniqueid}`);
        } catch (error) {
            console.error('Error deleting cart item:', error);
        }
    };
    const handleedit=async(id)=>
    {
        try{
            await axios.delete(`http://localhost:8080/snabbitbackend/api/service/${id}`);
        } catch(error)
        {
            console.error('Error deleting cart item:', error);
        }
    }

    return(
        <>
            <section className="admin ms-5">
                <h1>Admin View</h1>
                <div className="admin_p row ms-5">
                    {services.map((item)=>(
                    <div className="card col-3 ms-5 mb-3" key={item.id}>
                        <div className="card-body">
                            <p className="card-id">#{item.uniqueid}</p>
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.details}</p>
                            <p className="card-price">₹{item.price}</p>
                            <p className="card-time">{item.time} Minutes</p>
                            <a className="btn me-4" onClick={()=>handleonline(item.uniqueid)}>Online</a>
                            <a className="btn me-4" onClick={()=>handleoffline(item.uniqueid)}>Offline</a>
                            <a className="btn" onClick={()=>handleedit(item.id)}>Delete</a>
                        </div>
                    </div>))}
                </div>
            </section>
        </>
    )
}
export default Admin;