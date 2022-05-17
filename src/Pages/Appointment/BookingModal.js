import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';


const BookingModal = ({ date, treatment, setTreatment }) => {
    const { _id, name, slots } = treatment
    const [user] = useAuthState(auth);

    const formatedDate = format(date, 'PP');
    

    const handleBooking = e => {
        e.preventDefault();
        const slot = e.target.slot.value;

        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formatedDate,
            slot,
            patient: user.email,
            patientName: user.displayName,
            phone: e.target.phone.value

        }

        fetch('http://localhost:5000/booking',{
        method: "POST",
        headers:{
            'content-type' : 'application/json'
        },
        body: JSON.stringify(booking)
        })

        .then(req => req.json())
        .then(data => {

            console.log(data)
            if(data.success){
                toast(`Appointment is set on ${formatedDate} in ${slot}`)
            }
            else{
                toast.error(`Appointment is set on ${data.booking?.date} in ${data.booking?.slot}`)
            }
            setTreatment(null);
        })
        // setTreatment(null);
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">Booking for: {name}</h3>
                    <form onSubmit={handleBooking} className=' grid grid-cols-1 gap-1 mt-7 justify-items-center'>
                        <input type="text" value={format(date, 'PP')} className="input input-bordered input-success w-full max-w-xs" disabled />
                        <select name='slot' className="select select-success w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' defaultValue={user?.displayName} className="input input-bordered input-success w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered input-success w-full max-w-xs" />
                        <input type="email" name='email' defaultValue={user?.email} className="input input-bordered input-success w-full max-w-xs" />
                        <input type="submit" value="submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;