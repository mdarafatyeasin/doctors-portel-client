import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';

const AvailableAppointments = ({date}) => {
    const [services, setSevices]= useState([])

    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setSevices(data))
    },[])
    return (
        <div>
            <h1 className='text-center text-primary font-bold pt-5'>Available Appointments on {format(date, 'PP')}</h1>
            <div>
                
            </div>
        </div>
    );
};

export default AvailableAppointments;