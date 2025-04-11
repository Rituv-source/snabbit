import React from 'react';
import axios from 'axios';

function Cart_card({ id,name, time, price, imageUrl, uniqueid,fetchCart_items,useremail }) {
    const handleDelete = async () => {
        try {
                await axios.delete(`http://localhost:8080/snabbitbackend/api/cart/${uniqueid}`);
                fetchCart_items();
        } catch (error) {
            console.error('Error deleting cart item:', error);
        }
    };
    const handlePay = async () => {
        const paymentData = {
            name,
            price, 
            uniqueid,
            useremail,
            id
        };
        try {
                console.log("Payment data sent:", paymentData);
                await axios.post("http://localhost:8080/snabbitbackend/api/admin/booking", paymentData, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                alert("Payment Successful");
                fetchCart_items();
        } catch (error) {
            console.error('Error processing payment:', error);
        }
    };
    return (
        <div className="cart_card justify-content-between align-items-center border-1 rounded-3 border-dark border p-1">
            <div className='cart_card_wrappar d-flex align-items-center'>
                <div className='cart_card_picture'>
                    <img src={imageUrl} alt={name} className="cart_card_img w-25 h-25 ms-5"/>
                </div>
                <div className='cart_card_content d-flex flex-column justify-content-center fs-4'>
                    <div className='item_name d-flex'>
                        <p className='form_title'>Type of Service:</p>
                        <p>{name}</p>
                    </div>
                    <div className='item_time d-flex'>
                        <p className='form_title'>Duration:</p>
                        <p>{time} Minutes</p>
                    </div>
                    <div className='item_price d-flex'>
                        <p className='form_title'>Price:</p>
                        <p>₹{price}</p>
                    </div>
                </div>
            </div>
            <div className='cart_card_btn row m-3'>
                <div className='btn col-5' onClick={handleDelete}>Remove</div>
                <div className='space col-2'></div>
                <div className='btn col-5' onClick={handlePay}>Pay Now</div>
            </div>
        </div>
    );
}

export default Cart_card;