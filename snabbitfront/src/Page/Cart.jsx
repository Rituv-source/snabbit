import React, { useEffect,useState } from 'react';
import './Cart.css';
import Cart_card from '../components/Cart_card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';

function Cart()
{
    const [cart_items,setCart_items] = useState([]);
    useEffect(() => {
        fetchCart_items();
    }, []);
    const fetchCart_items= async ()=>
    {
        try {
            const response = await fetch('http://localhost:8080/snabbitbackend/api/cart', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            setCart_items(data);
            console.log(data);
        } catch (error) {
            console.error('Error fetching cart items:', error);
        }
    }
    const Total_amount= cart_items.reduce((total,item)=> total + item.price,0);

    return (
        <>
            <section className="cart">
                <div className='d-flex fs-1 align-items-center mt-5 gap-5 ms-5 ps-5'>
                <FontAwesomeIcon icon={faLeftLong} className='left-icon' onClick={()=>{window.history.back()}}/>
                <div className='cart-title fs-1'>Your Cart</div>
                </div>
                <div className='card_collection mt-5'>
                    {cart_items.map((item) => (<Cart_card 
                    key={item.id}
                    name={item.name}
                    time={item.time}
                    price={item.price}  
                    imageUrl={item.imageUrl}
                    uniqueid={item.uniqueid}
                    fetchCart_items={fetchCart_items}
                    />))}
                 </div>
                 <div className="total_line border border-2 border-dark m-5 "></div>
                 <div className='Total_amount m-5 fs-1 fw-bold text-end'>₹{Total_amount}:Total Amount</div>
            </section>
        </>
    )
}

export default Cart;