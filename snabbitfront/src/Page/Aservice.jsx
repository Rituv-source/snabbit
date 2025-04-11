import React,{useState,useEffect} from "react";
import axios from "axios";
function Aservice()
{
    const [services, setServices] = useState([]);
    const [uniqueid, setUniqueid] = useState('');
    const [name, setName] = useState('');
    const [details, setDetails] = useState('');
    const [price, setPrice] = useState('');
    const [time, setTime] = useState('');
    const [imageUrl, setImageUrl] = useState('');


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
                fetchServices();
        } catch (error) {
            console.error('Error deleting cart item:', error);
        }
    };
    const handleonline = async (uniqueid) => {
        try {
                await axios.delete(`http://localhost:8080/snabbitbackend/api/admin/service/${uniqueid}`);
                fetchServices();
        } catch (error) {
            console.error('Error deleting cart item:', error);
        }
    };
    const handleedit=async(id)=>
    {
        try{
            await axios.delete(`http://localhost:8080/snabbitbackend/api/service/${id}`);
            fetchServices();
        } catch(error)
        {
            console.error('Error deleting cart item:', error);
        }
    }
    const handlesubmit=async(e)=>
    {
          const serviceData = {
            name,
            details,
            imageUrl,
            price,
            time,
            uniqueid
        };
        try{
            await axios.post("http://localhost:8080/snabbitbackend/api/service", serviceData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            fetchServices();
        } catch (error) {
            console.error('Error submitting service data:', error);
        }
    }
    return (
        <>  
            <section className="aservice">
                <div className="cont_title fs-2 ms-4 mb-5">Service change</div>
                <div className="d-flex ">
                <div className="admin_p col-8 ms-3 me-5">
                    {services.map((item)=>(
                    <div className="card ms-5 mb-3" key={item.id}>
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
                <form className='border-1 rounded-3 border-dark border p-3 text-center' onSubmit={(e) => { e.preventDefault(); handlesubmit(); }} >
                <img src="https://snabbit.com/assets/snabbit-icon.svg" className='mb-5'/>
                <div className="mb-3">
                    <label htmlFor="uniqueid" className="form-label">uniqueid</label>
                    <input type="number" className="form-control" id="uniqueid" value={uniqueid} onChange={(e)=>setUniqueid(e.target.value)}required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">name</label>
                    <input type="text" className="form-control" id="name" value={name} onChange={(e)=>setName(e.target.value)} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="details" className="form-label">details</label>
                    <input type="text" className="form-control" id="details" value={details} onChange={(e)=>setDetails(e.target.value)} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">price</label>
                    <input type="number" className="form-control" id="price" value={price} onChange={(e)=>setPrice(e.target.value)} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="time" className="form-label">time</label>
                    <input type="text" className="form-control" id="name" value={time} onChange={(e)=>setTime(e.target.value)} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="imageUrl" className="form-label">image Url</label>
                    <input type="text" className="form-control" id="imageUrl" value={imageUrl} onChange={(e)=>setImageUrl(e.target.value)} required/>
                </div>
                <button type="submit" className="btn">Submit</button>
            </form>
                </div>
                </div>
            </section>
        </>
    )
}
export default Aservice;