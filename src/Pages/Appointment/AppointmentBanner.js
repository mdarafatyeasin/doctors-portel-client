import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import background from '../../assets/images/bg.png'

const AppointmentBanner = ({date, setDate}) => {
    

    // তেমন কিছুই না মামা শুধু state টারে lift বা এক ধাপ উপরে পাঠান হইছে। যার ফলে date আর setDate props হিশেবে নিছে টেনশন করিস না। 
    // বুজছর তো useStare টারে appointment এর কাছে পাঠাই দিছি। 
    return (
        <div style={{
            background: `url(${background})`
        }} className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse text-xl">
                <img src={chair} alt='Dentist Chair' className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                <DayPicker 
                mode="single"
                selected={date}
                onSelect={setDate}
                />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;