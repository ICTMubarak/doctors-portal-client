import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import apointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const MakeApointment = () => {
    return (
        <section className='mt-32'
        style={{
                background: `url(${apointment})`
            }}
        >
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} alt="" className="-mt-32 lg:w-1/2 rounded-lg shadow-2xl" />
                    <div>
                        <h2 className='text-lg text-primary font-bold'>Apointment</h2>
                        <h1 className="text-white text-5xl font-bold">Make an apointment today</h1>
                        <p className="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <PrimaryButton>Apponment</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeApointment;