import React,{useState} from 'react';
import './service_card.css';

function Service_card({ name, details, price, imageUrl,time,uniqueid}) {
   


    const [cart_items, setCart_items] = useState([]);
    const handleclick = async ()=>
        {
            try {
                const response = await fetch('http://localhost:8080/snabbitbackend/api/cart', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: name,
                        price: price,
                        imageUrl: imageUrl,
                        time: time,
                        uniqueid:uniqueid
                    })
                });
                const data = await response.json();
                setCart_items(prev => [...prev, data]);
            } catch (error) {
                console.error('Error fetching cart items:', error);
            }
        }
    return (
        <div className="service-card">
            <div className="service-image">
                 <img src={imageUrl} alt={name} />
            </div>
            <div className="service-content">
                <h3 className='col-12'>{name}</h3>
                <p className='col-12'>{details}</p>
                <div className="service-price-booking row mt-4">
                    <span className='service-price col-6'>₹{price}</span>
                    <button className="btn col-6 border-0 rounded-5" onClick={handleclick}>Add To Cart</button>
                </div>
            </div>
        </div>
    );
}

export default Service_card;