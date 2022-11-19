import { format } from 'date-fns';
import React from 'react';

const AbailableAppointment = ({selectDate}) => {
    
    return (
        <div>
            <p className='text-ceter text-primary'>Abailable appointment on {format(selectDate, 'PP')}</p>
        </div>
    );
};

export default AbailableAppointment;