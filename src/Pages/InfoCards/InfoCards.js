import React from 'react';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const InfoCards = () => {

    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Opening 9.00 am to 5.00pm everyday',
            icon: {clock},
            bgClass: 'bg-primary'
        },
        {
            id: 1,
            name: 'Opening Locations',
            description: 'Opening 9.00 am to 5.00pm everyday',
            icon: {marker},
            bgClass: 'bg-accent'
        },
        {
            id: 1,
            name: 'Contuct Us',
            description: 'Opening 9.00 am to 5.00pm everyday',
            icon: {phone},
            bgClass: 'bg-primary'
        }
    ]

    return (
        <div className='grid mt-6 text-white grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
           {
            cardData.map(card => <InfoCard
            key={card.id}
            card = {card}
            ></InfoCard>)
           }
        </div>
    );
};

export default InfoCards;