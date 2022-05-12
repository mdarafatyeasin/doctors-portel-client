import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import MainButton from '../Reviews/MainButton';


const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='flex justify-center items-center'>
            <div className='flex-1'>
                <img className='mt-[-150px] hidden lg:block' src={doctor} alt="" />
            </div>

            <div className='lg:flex-1 px-6'>
                <h3 className='text-xl font-bold text-primary'>Appointment</h3>
                <h2 className='text-3xl text-white py-5'>MAke an Appointment Today</h2>
                <p className='text-white'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab nobis numquam atque possimus modi distinctio odit dolorem voluptatibus quos quaerat veniam inventore, ipsa recusandae molestias soluta rem veritatis ratione corrupti. Labore id dolores, et, asperiores officiis exercitationem impedit deleniti sunt ducimus possimus nulla enim nostrum fugit veniam itaque, quasi tenetur!
                </p>
                <MainButton>Get Started</MainButton>
            </div>
        </section>
    );
};

export default MakeAppointment;
