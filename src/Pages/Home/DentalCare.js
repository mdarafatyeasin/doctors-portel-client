import React from 'react';
import tretment from '../../assets/images/treatment.png'

const DentalCare = () => {
    return (
        <div className="mb-[150px] card card-side shadow-xl items-center">
            <figure><img className='h-[576px] w-[458px]' src={tretment} alt="Movie" /></figure>
            <div ClassName="card-body justify-center">
                <h2 className="text-4xl font-bold ml-5 mb-11">Exceptional Dental Care, on Your Terms</h2>
                <p className='ml-5 mb-11'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <div className="card-actions justify-self-start">
                    <button className="btn btn-primary ml-5">GET STARTED</button>
                </div>
            </div>
        </div>
    );
};

export default DentalCare;