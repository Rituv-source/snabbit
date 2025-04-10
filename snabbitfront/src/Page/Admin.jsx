import React,{useState,useEffect} from "react";
import axios from "axios";

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
                <div className="d-flex">
                <div className="admin_p col-8 ms-3 me-5">
                    {services.map((item)=>(
                    <div className="card ms-2 mb-3" key={item.id}>
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
                <div className="w-25">
                <form className='border-1 rounded-3 border-dark border p-5 text-center' onSubmit={()=>handleSubmit()}>
                <img src="https://snabbit.com/assets/snabbit-icon.svg" className='mb-5'/>
                <div className="mb-3">
                    <label htmlFor="uniqueid" className="form-label">uniqueid</label>
                    <input type="number" className="form-control" id="uniqueid" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">name</label>
                    <input type="text" className="form-control" id="name" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="details" className="form-label">details</label>
                    <input type="text" className="form-control" id="details" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">price</label>
                    <input type="number" className="form-control" id="price" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="time" className="form-label">time</label>
                    <input type="text" className="form-control" id="name" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="imageUrl" className="form-label">image Url</label>
                    <input type="text" className="form-control" id="imageUrl" required/>
                </div>
                <button type="submit" className="btn">Submit</button>
            </form>
                </div>
                </div>
            </section>
        </>
    )
}
export default Admin;