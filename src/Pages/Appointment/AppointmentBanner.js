import React, { useState } from 'react';
import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import background from '../../assets/images/bg.png'

const AppointmentBanner = () => {
    const [date, setDate] = useState(new Date())

    let footer = <p>Please pick a day.</p>;
    if (date) {
        footer = <p>You Selected: {format(date, 'PP')}.</p>;
      }
    return (
        <div style={{
            background: `url(${background})`
        }} class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} alt='Dentist Chair' class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                <DayPicker 
                mode="single"
                selected={date}
                onSelect={setDate}
                footer={footer}
                />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;