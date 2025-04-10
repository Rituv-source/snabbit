import Footer from "../components/Footer";
import Header from "../components/Header";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Service_card from "../components/service_card";
import './Service.css';

function Service() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetchServices();
    }, []);

    const fetchServices = async () => {
        try {
            const response = await axios.get('http://localhost:8080/snabbitbackend/api/service', {
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

    return (
        <>
            <div className="service-container">
                <div className="services-grid">
                    {services.map((item) => (
                        <Service_card
                            key={item.id}
                            name={item.name}
                            details={item.details}
                            price={item.price}
                            imageUrl={item.imageUrl}
                            time={item.time}
                            uniqueid={item.uniqueid}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Service;