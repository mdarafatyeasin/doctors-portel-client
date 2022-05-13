import React from 'react';

const Service = ({ service, setTreatment }) => {

    const { name, slots } = service
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center">
                <h2 className="card-title text-center text-primary">{name}</h2>
                <p>{
                    slots.length > 0 ? <span>{slots[0]}</span> : <span className='text-red-500 font-bold'>Try Another Day &#x2639;</span>
                }
                </p>
                <p className='uppercase'>
                    {slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available
                </p>
                <div className="card-actions justify-end">            
                    <label htmlFor="booking-modal"
                    disabled={slots.length === 0}
                    onClick={() => setTreatment(service)} 
                    className="btn btn-secondary text-white font-bold">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;