import React from 'react';

const AppointmentOptions = ({appointmentOption, setTreatment}) => {
const {name, slots } = appointmentOption;
//console.log(appointmentOption);
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body text-center">
    <h2 className="card-title">{name}</h2>
    <p>{slots.length > 0 ? slots[0] : 'Try another day'}</p>
    <p>{slots.length} slots available</p>
    <div className="card-actions">
      <label htmlFor="booking-modal" className="btn btn-primary"
      onClick={()=> setTreatment(appointmentOption)}
      >Book Appointment</label>

    </div>
  </div>
</div>
    );
};

export default AppointmentOptions;