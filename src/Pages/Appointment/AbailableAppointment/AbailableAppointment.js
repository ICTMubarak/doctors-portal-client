import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOptions from './AppointmentOptions';

const AbailableAppointment = ({selectDate}) => {
    const [appointmentOptions, setAppointmentOptions] = useState([])
    useEffect(() =>{
        fetch('appointmentOptions.json')
        .then(res => res.json())
        .then(data => setAppointmentOptions(data))
    }, [])
    
    //console.log(appointmentOptions);
    return (
        <section>
            <p className='text-ceter text-primary'>Abailable appointment on {format(selectDate, 'PP')}</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    appointmentOptions.map(options => <AppointmentOptions
                    key={options._id}
                    appointmentOption = {options}
                    ></AppointmentOptions>)
                }
            </div>
            <BookingModal></BookingModal>
        </section>
    );
};

export default AbailableAppointment;