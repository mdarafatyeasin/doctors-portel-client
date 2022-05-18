import React, { useEffect, useState } from 'react';

const MyAppointments = () => {

    const [appointment, setAppointment] = useState([])
    useEffect(()=>{
        fetch()
    },[])


    return (
        <div>
            <h3>My appointment</h3>
        </div>
    );
};

export default MyAppointments;