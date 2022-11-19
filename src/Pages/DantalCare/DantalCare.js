import React from 'react';
import treatment from '../../assets/images/treatment.png'

const DantalCare = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className='h-48'><img src={treatment} alt="treatment"/></figure>
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-start">
            <button className="btn btn-primary">Get start</button>
          </div>
        </div>
      </div>
    );
};

export default DantalCare;