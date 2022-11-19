import React from 'react';
import fluorid from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {

    const servicesData = [
        {
            id: 1,
            name: 'floride treatment',
            description: 'asdals;djfa  ;lka a jk',
            img: fluorid
        },
        {
            id: 2,
            name: 'cavity',
            description: 'asdals;djfa  ;lka a jk',
            img: cavity
        },
        {
            id: 3,
            name: 'Whiting',
            description: 'asdals;djfa  ;lka a jk',
            img: whitening
        },
    ]

    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h1 className='text-3xl text-primary uppercase'>Our services</h1>
                <h2 className='text-3xl'>Servies We Provide</h2>


            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    servicesData.map(service => <Service
                    key={service.id}
                    service={service}
                    ></Service>)
                }
            </div>
        </div>
        
    );
};

export default Services;