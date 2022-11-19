import React, { useState } from 'react';
import AbailableAppointment from '../AbailableAppointment/AbailableAppointment';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';

const Appointment = () => {
    const [selectDate, setSelectDate] = useState(new Date());
    return (
        <div>
            <AppointmentBanner 
            selectDate={selectDate}
            setSelectDate={setSelectDate}
            ></AppointmentBanner>
            <AbailableAppointment
            selectDate={selectDate}
            ></AbailableAppointment>
        </div>
    );
};

export default Appointment;