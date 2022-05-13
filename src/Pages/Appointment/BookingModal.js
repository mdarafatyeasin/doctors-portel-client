import React from 'react';
import { format } from 'date-fns';
const BookingModal = ({ date, treatment, setTreatment }) => {
    const { _id, name, slots } = treatment

    const handleBooking = e => {
        e.preventDefault();

        const timeSlot = e.target.timeSlot.value;
        const name = e.target.name.value;
        const phoneNumber = e.target.phoneNumber.value
        const email = e.target.email.value

        console.log(timeSlot, name, phoneNumber, email)
        setTreatment(null);
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label htmlFor="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">Booking for: {name}</h3>
                    <form onSubmit={handleBooking} className=' grid grid-cols-1 gap-1 mt-7 justify-items-center'>
                        <input type="text" value={format(date, 'PP')} class="input input-bordered input-success w-full max-w-xs" disabled />
                        <select name='timeSlot' class="select select-success w-full max-w-xs">
                            {
                                slots.map(slot => <option key={_id} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' placeholder="Full Name" class="input input-bordered input-success w-full max-w-xs" />
                        <input type="text" name='phoneNumber' placeholder="Phone Number" class="input input-bordered input-success w-full max-w-xs" />
                        <input type="email" name='email' placeholder="Email" class="input input-bordered input-success w-full max-w-xs" />
                        <input type="submit" value="submit" class="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;