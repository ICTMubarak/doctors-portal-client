import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';


const AppointmentBanner = () => {
    const [selectDate, setSelectDate] = useState(new Date());
    return (
        <header>
             <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="rounded-lg shadow-2xl w-1/2" alt="banner" />
                <div>
              
                           <DayPicker 
                           mode = 'single'
                           selected={selectDate}
                           onSelect={setSelectDate}
                           />
                  
                </div>
            </div>
        </div>
        </header>
    );
};

export default AppointmentBanner;